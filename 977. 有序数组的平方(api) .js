/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	return nums.sort((a, b) => a ** 2 - b ** 2).map(item => item ** 2)
}
