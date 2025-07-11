
const _ = require('lodash');


const users = [
  { id: 1, name: 'Alice',  age: 25, city: 'Mumbai',   salary: 75000 },
  { id: 2, name: 'Bob',    age: 30, city: 'Delhi',    salary: 82000 },
  { id: 3, name: 'Charlie',age: 35, city: 'Mumbai',   salary: 99000 },
  { id: 4, name: 'David',  age: 22, city: 'Bangalore',salary: 61000 },
  { id: 5, name: 'Eve',    age: 30, city: 'Delhi',    salary: 85000 },
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nested   = [1, [2, [3, [4]], 5]];
const dupes    = [1, 2, 2, 3, 3, 3, 4];

// ---------------------------------------------------------------
// 1️⃣ Arrays & Math
// ---------------------------------------------------------------
function arraysDemo() {
  console.log('\n--- Arrays Demo ---');

  console.log('chunk:',       _.chunk(numbers, 3));           
  console.log('compact:',     _.compact([0, 1, false, 2, '', 3])); // [1,2,3]
  console.log('difference:',  _.difference([1,2,3], [3,4]));  // [1,2]
  console.log('intersection:',_.intersection([1,2,3], [2,3,4])); // [2,3]
  console.log('uniq:',        _.uniq(dupes));                  // [1,2,3,4]
  console.log('flattenDeep:', _.flattenDeep(nested));          // [1,2,3,4,5]
  console.log('zip:',         _.zip(['a','b','c'], [1,2,3]));  // [['a',1],['b',2],['c',3]]
  console.log('range:',       _.range(0, 10, 2));             // [0,2,4,6,8]
}

// ---------------------------------------------------------------
// 2️⃣ Collection Utilities
// ---------------------------------------------------------------
function collectionsDemo() {
  console.log('\n--- Collections Demo ---');

  console.log('map (names):', _.map(users, 'name'));
  console.log('filter (<30):', _.filter(users, u => u.age < 30));
  console.log('find (Bob):',   _.find(users, { name: 'Bob' }));
  console.log('groupBy (city):',_.groupBy(users, 'city'));
  console.log('countBy (age):', _.countBy(users, 'age'));
  console.log('keyBy (id):',    _.keyBy(users, 'id')); // {1: {...}, 2: {...}, ...}
  console.log('orderBy (salary desc):', _.orderBy(users, ['salary'], ['desc']));
  console.log('sampleSize (2 random):', _.sampleSize(users, 2));
}

// ---------------------------------------------------------------
// 3️⃣ Object Utilities
// ---------------------------------------------------------------
function objectsDemo() {
  console.log('\n--- Objects Demo ---');

  const deepUser = { profile: { personal: { name: 'Frank', city: 'Pune' } } };

  console.log('get:', _.get(deepUser, 'profile.personal.name'));
  _.set(deepUser, 'profile.personal.age', 28);
  console.log('set + has:', _.has(deepUser, 'profile.personal.age'), deepUser);

  const picked = _.pick(users[0], ['name','city']);
  const omitted = _.omit(users[0], ['salary']);
  console.log('pick:', picked);
  console.log('omit:', omitted);

  const defaults = { theme:'light', notifications:true };
  const prefs    = { notifications:false };
  console.log('merge:', _.merge({}, defaults, prefs));

  console.log('cloneDeep:', _.cloneDeep(users[0]));
}

// ---------------------------------------------------------------
// 4️⃣ String Utilities
// ---------------------------------------------------------------
function stringsDemo() {
  console.log('\n--- Strings Demo ---');

  console.log('camelCase:', _.camelCase('hello world example'));
  console.log('kebabCase:', _.kebabCase('Hello World Example'));
  console.log('snakeCase:', _.snakeCase('helloWorldExample'));
  console.log('startCase:', _.startCase('hello-world_example'));
  console.log('pad:', _.pad('lodash', 10));
}

// ---------------------------------------------------------------
// 5️⃣ Function Utilities
// ---------------------------------------------------------------
function functionsDemo() {
  console.log('\n--- Functions Demo ---');

  const add = (a,b) => a+b;
  const memoAdd = _.memoize(add);
  console.log('memoize (2+3):', memoAdd(2,3), '(cached ->)', memoAdd(2,3));

  const greet = _.once(() => console.log('Hello only once!'));
  greet(); greet(); // second call ignored

  const expensiveTask = () => console.log('Expensive task @', Date.now());
  const debounced = _.debounce(expensiveTask, 300);
  const throttled = _.throttle(expensiveTask, 500);

  // Simulate rapid calls
  for(let i=0;i<5;i++) { debounced(); throttled(); }

  // Wait to flush debounce (in real app you'd rely on user input)
  setTimeout(() => console.log('Debounce + throttle demo done'), 1000);
}

// ---------------------------------------------------------------
// 6️⃣ Type Checking & Misc
// ---------------------------------------------------------------
function miscDemo() {
  console.log('\n--- Misc / Type Check Demo ---');

  console.log('isArray:', _.isArray(users));
  console.log('isEqual:', _.isEqual({a:1},{a:1}));
  console.log('isEmpty:', _.isEmpty([]));
  console.log('isNil:', _.isNil(null), _.isNil(undefined), _.isNil(0));
  console.log('identity:', _.identity('value')); // returns same value
  console.log('noop returns ->', _.noop());
}

// ---------------------------------------------------------------
//  Executions (comment out to focus) -----------------------------
// ---------------------------------------------------------------
arraysDemo();
collectionsDemo();
objectsDemo();
stringsDemo();
functionsDemo();
miscDemo();

// ---------------------------------------------------------------
//  End of Lodash Comprehensive Demo
// ---------------------------------------------------------------
