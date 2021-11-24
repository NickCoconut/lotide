const assertArraysEqual = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else if (JSON.stringify(array1) !== JSON.stringify(array2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
    let mid = array.length
  if (mid === 1 || mid === 2) {
  return []
} else if (mid % 2 === 0) {
  return  [
    array[mid / 2 - 1],
    array[mid / 2]
  ]
} else {
  return array[Math.floor(mid / 2)]
}
}

assertArraysEqual(middle([1,2,3,4,5]),3)
