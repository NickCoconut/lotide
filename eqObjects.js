const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
  return true
  } else {
  return false
}
}
const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  if (key1.length === key2.length) {
    for (const key of key1) {
      if(Array.isArray(object1[key]) && (Array.isArray(object2[key]))){
        if (eqArrays(object1[key], object2[key])) {
          return true
        } else {
          return false
        }
      }
    }
  } else {
    return false
}
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false