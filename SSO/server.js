const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// 1) Session setup
app.use(session({ secret: 'CHANGE_THIS', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// 2) Passport user serialization
// `serializeUser` determines which data of the user object should be stored in the session.
// Here, we store the entire `user` object. In production, you'd typically store only a unique user ID.
passport.serializeUser((user, done) => done(null, user));

// `deserializeUser` is called on every request by passport.session(),
// and it retrieves the stored data from the session and makes it available as `req.user`.
// We simply pass the object through; in real apps, you'd look up the user from the database by ID.
passport.deserializeUser((obj, done) => done(null, obj));

// 3) Configure Google OAuth2 strategy Configure Google OAuth2 strategy
passport.use(new GoogleStrategy({
  clientID: 'GOOGLE_CLIENT_ID',
  clientSecret: 'GOOGLE_CLIENT_SECRET',
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  // profile contains the authenticated user's Google profile
  return done(null, profile);
}));

// 4) Routes
app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`<h1>Hello, ${req.user.displayName}</h1><a href='/logout'>Logout</a>`);
  } else {
    res.send(`<h1>Home</h1><a href='/auth/google'>Login with Google</a>`);
  }
});

// Trigger Google OAuth2 login
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// OAuth2 callback
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => res.redirect('/')
);

// Logout route
app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

// Serve static files
app.use(express.static('public'));

const PORT = 3000;
app.listen(PORT, () => console.log(`SSO demo listening on http://localhost:${PORT}`));