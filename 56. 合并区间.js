/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let current = intervals[0]
  let arr = []
  for (let i = 1; i < intervals.length; i++) {
    const element = intervals[i];
    if (current[1] >= element[0]) {
      current[1] = Math.max(current[1], element[1])
    } else {
      arr.push(current)
      current = element
    }
  }
  arr.push(current) //把最后一个推送进去
  return arr
};