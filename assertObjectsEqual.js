const assertObjectsEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');

const eqObjects = require('./eqObjects');

module.exports = assertObjectsEqual;

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false