/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = new Map()
  for (let i of s) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1)
    } else {
      map.set(i, 1)
    }
  }
  const arr = Array.from(map)
  arr.sort((a, b) => b[1] - a[1])
  let res = ''
  for (let i = 0; i < arr.length; ++i) {
    res += arr[i][0].repeat(arr[i][1])
  }
  return res
};