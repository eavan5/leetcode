/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = []
  if (s.length < 4 || s.length > 12) return res;
  backtrack()
  return res

  function backtrack (start = 0, temp = []) {
    if (temp.length > 4) return  //大于4位 直接终止递归
    if (temp.length === 4 && start === s.length) {  //滑动到最后一位 凑齐所有可能 直接终止
      res.push(temp.join('.'))
      return
    }
    for (let i = start; i < s.length; i++) {
      // 不能以01开头 只能0.22 或者 1.0.这样
      if (i > start && s[start] === '0') return
      const one = s.slice(start, i + 1)
      if (+one > 255) return
      temp.push(one)
      backtrack(i + 1, temp)
      temp.pop()
    }
  }
};

console.log(restoreIpAddresses("1234"));
// @lc code=end

