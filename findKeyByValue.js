const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  const objectKey = Object.keys(object);
  for (const eachKey of objectKey) {
    if (value.includes(object[eachKey])) {
      return eachKey;
    } 
  };
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);