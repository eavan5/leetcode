/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) return []
  let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1
  const res = []
  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) res.push(matrix[top][i])
    for (let i = top; i < bottom; i++) res.push(matrix[i][right])
    for (let i = right; i > left; i--) res.push(matrix[bottom][i])
    for (let i = bottom; i > top; i--) res.push(matrix[i][left])
    top++
    bottom--
    left++
    right--
  }
  if (left === right) {
    for (let i = top; i <= bottom; i++) res.push(matrix[i][left])
  } else if (top === bottom) {
    for (let i = left; i <= right; i++) res.push(matrix[top][i])
  }
  return res
};

console.log(spiralOrder([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]]));