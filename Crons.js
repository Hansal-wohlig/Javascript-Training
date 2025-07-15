/* Crons.js  – REAL‑TIME price from NSE website (CommonJS) */

const cron  = require('node-cron');
const https = require('https');

/* ---------- CONFIG -------------------------------------------------- */
const SYMBOL      = 'RELIANCE';                           // any NSE symbol
const API_PATH    = `/api/quote-equity?symbol=${SYMBOL}`; // NSE JSON endpoint
const BASE_HOST   = 'www.nseindia.com';
const TIMEZONE    = 'Asia/Kolkata';

/* ---------- HEADERS THAT FOOL NSE’S BOT FILTER ---------------------- */
const BASE_HEADERS = {
  'User-Agent'      : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
  'Accept'          : 'application/json, text/plain, */*',
  'Accept-Language' : 'en-US,en;q=0.9',
  'Referer'         : `https://${BASE_HOST}/get-quotes/equity?symbol=${SYMBOL}`,
  'Origin'          : `https://${BASE_HOST}`,
  'Connection'      : 'keep-alive'
};

/* ---------- UTILS --------------------------------------------------- */
// 1) Fetch a fresh “bm_sv=…” tracking cookie from NSE’s home page
function getCookie(cb) {
  const opts = { hostname: BASE_HOST, path: '/', headers: { 'User-Agent': BASE_HEADERS['User-Agent'] } };
  https.get(opts, res => {
    const raw = res.headers['set-cookie'] || [];
    const cookie = raw.map(c => c.split(';')[0]).join('; '); // flatten
    cb(null, cookie);
  }).on('error', cb);
}

// 2) Hit the JSON quote endpoint using that cookie
function fetchPrice(cookie) {
  const opts = {
    hostname: BASE_HOST,
    path    : API_PATH,
    headers : { ...BASE_HEADERS, Cookie: cookie }
  };

  https.get(opts, res => {
    let body = '';
    res.on('data', chunk => (body += chunk));
    res.on('end', () => {
      if (res.statusCode !== 200) {
        console.error(`❌ HTTP ${res.statusCode} – NSE blocked the call`);
        return;
      }
      try {
        const json  = JSON.parse(body);
        const price = json?.priceInfo?.lastPrice;
        if (!price) throw new Error('Price field missing');
        console.log(`[${new Date().toLocaleTimeString()}] ${SYMBOL}: ₹${price}`);
      } catch (e) {
        console.error('❌ Parse error:', e.message);
      }
    });
  }).on('error', err => console.error('❌ Request error:', err.message));
}

/* ---------- CRON TASK ---------------------------------------------- */
let jar = { value: '', ts: 0 };            // cached cookie + timestamp

function job() {
  const stale = Date.now() - jar.ts > 15 * 60_000; // refresh every 15 min
  if (stale || !jar.value) {
    getCookie((err, cookie) => {
      if (err) return console.error('❌ Cookie fetch error:', err.message);
      jar = { value: cookie, ts: Date.now() };
      fetchPrice(jar.value);
    });
  } else {
    fetchPrice(jar.value);
  }
}

/* ---------- SCHEDULE (every JOB_SECONDS) ---------------------------- */
cron.schedule(`* * * * * *`, job, { timezone: TIMEZONE });

/* ---------- CTRL‑C -------------------------------------------------- */
process.on('SIGINT', () => {
  console.log('\n🛑 Cron stopped.');
  process.exit(0);
});
