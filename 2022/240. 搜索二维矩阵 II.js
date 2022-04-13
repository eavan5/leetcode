/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rowCount = matrix.length
  const colCount = matrix?.[0].length
  if (!(rowCount && colCount)) return false
  let right = colCount - 1
  let top = 0
  while (right >= 0 && top <= rowCount - 1) {
    let current = matrix[top][right]
    if (current === target) {
      return true
    } else if (current > target) {
      right--
    } else {
      top++
    }
  }
  return false
};