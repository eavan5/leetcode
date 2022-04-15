/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num, i = 0) {
  num = num.toString()
  if (num.length - 1 <= i) return 1
  const twoStr = num.substring(i, i + 2)
  console.log(twoStr)
  if (twoStr >= 10 && twoStr <= 25) {
    return translateNum(num, i + 1) + translateNum(num, i + 2)
  } else {
    return translateNum(num, i + 1)
  }

};