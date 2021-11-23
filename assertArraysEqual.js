const assertArraysEqual = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else if (JSON.stringify(array1) !== JSON.stringify(array2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};


assertArraysEqual([1, 2, 3], [1, 2, 3]);