/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let temp = intervals[0]
  const res = []
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i]
    if (temp[1] >= current[0]) {
      temp[1] = Math.max(current[1], temp[1])
    } else {
      res.push(temp)
      temp = current
    }
  }
  res.push(temp)
  return res
};