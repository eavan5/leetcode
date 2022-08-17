/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
	heights = [-1, ...heights, -1] // 为了让栈走完,前后个加一个-1
	const stack = [0]
	let res = 0
	for (let i = 0; i < heights.length; i++) {
		while (stack.length && heights[i] < heights[stack.at(-1)]) {
			const mid = stack.pop()
			const left = stack.at(-1)
			const width = i - left - 1
			res = Math.max(res, width * heights[mid]) //以mid为顶的最大高度
		}
		stack.push(i)
	}
	return res
}
