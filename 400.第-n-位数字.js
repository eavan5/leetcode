/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第 N 位数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
	let base = 9,
		count = 1
	while (n > count * base) {
		n -= count * base
		count++
		base *= 10
	}
	// 所在位数中数组的下标
	n--
	const start = 10 ** (count - 1) + ((n / count) >> 0),
		index = n % count // 拿到数目的下标
	return `${start}`.charAt(index)
}
// @lc code=end
