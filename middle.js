
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

module.exports = middle;
