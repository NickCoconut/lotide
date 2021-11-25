const assertArraysEqual = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else if (JSON.stringify(array1) !== JSON.stringify(array2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i]
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i)
   } else {
        results[letter] = [i]
   }
    }
  }
  return results
};

assertArraysEqual(letterPositions("hello").l, [2]);

