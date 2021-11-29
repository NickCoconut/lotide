const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key
    }
  }
  }
  
  module.exports = findKey;

  // const results1 = findKey({
  //   "Blue Hill": { stars: 1 },
  //   "Akaleri":   { stars: 3 },
  //   "noma":      { stars: 2 },
  //   "elBulli":   { stars: 3 },
  //   "Ora":       { stars: 2 },
  //   "Akelarre":  { stars: 3 }
  // }, x => x.stars === 2);

  // const results2 = findKey({
  //   "Blue Hill": { stars: 1 },
  //   "Akaleri":   { stars: 3 },
  //   "noma":      { stars: 2 },
  //   "elBulli":   { stars: 3 },
  //   "Ora":       { stars: 2 },
  //   "Akelarre":  { stars: 3 }
  // }, x => x.stars === 3);

  // const results3 = findKey({
  //   "Blue Hill": { stars: 1 },
  //   "Akaleri":   { stars: 3 },
  //   "noma":      { stars: 2 },
  //   "elBulli":   { stars: 3 },
  //   "Ora":       { stars: 2 },
  //   "Akelarre":  { stars: 3 }
  // }, x => x.stars === 5);

  // assertEqual(results1, 'noma')
  // assertEqual(results2, 'Ora')
  // assertEqual(results3, 'Blue Hill')