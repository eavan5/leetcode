/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
// https://programmercarl.com/0435.%E6%97%A0%E9%87%8D%E5%8F%A0%E5%8C%BA%E9%97%B4.html#%E6%80%9D%E8%B7%AF

var eraseOverlapIntervals = function (intervals) {
	intervals.sort((a, b) => a[1] - b[1])
	let count = 1
	let end = intervals[0][1]
	for (let i = 1; i < intervals.length; i++) {
		const current = intervals[i]
		if (end <= current[0]) {
			end = current[1]
			count++
		}
	}
	return intervals.length - count
}
// @lc code=end
