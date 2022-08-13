/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0
  let max = 1
  const map = new Map()
  let slow = 0, fast = 0
  while (fast < s.length) {
    const current = s[fast]
    if (map.has(current)) {
      slow = Math.max(map.get(current) + 1, slow)
    }
    map.set(current, fast)
    max = Math.max(max, fast - slow + 1)
    fast++
  }
  return max
};


console.log(lengthOfLongestSubstring("abba"));