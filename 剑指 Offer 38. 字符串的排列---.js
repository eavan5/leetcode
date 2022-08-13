/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  const res = []
  const set = new Set()
  dfs()
  return res
  function dfs (index = 0, temp = '') {
    if (index === s.length && !res.includes(temp)) {
      res.push(temp)
      return
    }
    for (let i = 0; i < s.length; i++) {
      if (set.has(i)) {
        continue
      }
      set.add(i)
      dfs(index + 1, temp + s[i])
      set.delete(i)
    }
  }
};

// 回溯.写得垃圾 哪天再改

console.log(permutation('aab'));