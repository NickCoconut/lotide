const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {}

  for (const item of sentence) { 
    if (results[item]) {
        results[item] += 1;
    } else {
        results[item] = 1;
    }
    }
    return results;
  }
  
  const result1 = countLetters("lighthouse in the house");

assertEqual(result1.l, 1);
assertEqual(result1['h'], 4);