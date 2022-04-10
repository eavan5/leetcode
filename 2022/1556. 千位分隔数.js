/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  const res = []
  const allNum = `${n}`.split('').reverse()
  for (let i = 0; i < allNum.length; i++) {
    res.push(allNum[i])
    if ((i + 1) % 3 === 0 && i < allNum.length - 1) {
      res.push('.')
    }
  }
  return res.reverse().join('')
};