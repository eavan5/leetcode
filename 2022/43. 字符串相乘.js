/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const res = Array(num1.length + num2.length).fill(0)
  for (let i = num1.length - 1; i >= 0; i--) {
    let c1 = +num1[i]
    for (let j = num2.length - 1; j >= 0; j--) {
      const c2 = +num2[j]
      const multiply = c1 * c2
      const sum = multiply + res[i + j + 1]
      res[i + j + 1] = sum % 10
      res[i + j] += (sum / 10) >> 0
    }
  }
  while (res[0] === 0) {
    res.shift()
  }
  return res.join("") || "0"
};