/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
	const arr = `${num}`.split('')
	const newArr = [...arr].sort((a, b) => b - a)
	for (let i = 0; i < arr.length; i++) {
		if (newArr[i] !== arr[i]) {
			const j = arr.lastIndexOf(newArr[i])
			;[arr[i], arr[j]] = [arr[j], arr[i]]
			return +arr.join('')
		}
	}
	return num
}
// @lc code=end

console.log(maximumSwap(98368))
