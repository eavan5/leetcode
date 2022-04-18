/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  const target = arr.reduce((p, c) => p + c) / 3
  let sum = 0
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (sum === target) {
      sum = 0
      count++
    }
  }
  return count >= 3
};