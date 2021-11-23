const head = function(array) {
  return array[0];
};

const assertEqual = function(head, expected) {
  if (head === expected) {
    console.log(`✅✅✅ Assertion Passed: ${head} === ${expected}`);
  } else if (head !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${head} !== ${expected}`);
  } else if (head === []) {
    return undefined;
  }
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");