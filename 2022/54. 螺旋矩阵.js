/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1
  const res = []
  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) res.push(matrix[top][i]) //上
    for (let i = top; i < bottom; i++) res.push(matrix[i][right]) //右
    for (let i = right; i > left; i--) res.push(matrix[bottom][i]) //下
    for (let i = bottom; i > top; i--) res.push(matrix[i][left]) //左
    left++
    right--
    top++
    bottom--
  }
  if (left === right) { // 最终成为一列
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][left])
    }
  } else if (top === bottom) { // 最终成为一行
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
  }
  return res

};



console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));