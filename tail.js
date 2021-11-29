const tail = function(array) {
  const tailArray = array.slice(1)
  return tailArray
};

const assertEqual = require('./assertEqual')

module.exports = tail;
