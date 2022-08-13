/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const map = new Map
  for (let item of s) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1)
  }
  for (let item of t) {
    if (map.has(item)) {
      const val = map.get(item) - 1
      map.set(item, val)
      if (!val) map.delete(item)
    } else {
      return false
    }
  }
  return true
};