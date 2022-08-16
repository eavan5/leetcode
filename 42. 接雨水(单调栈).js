/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	const stack = [0]
	let res = 0
	for (let i = 0; i < height.length; i++) {
		const current = height[i]
		if (height[stack.at(-1)] > current) {
			stack.push(i)
		} else if (height[stack.at(-1)] === current) {
			stack.pop()
			stack.push(i)
		} else {
			while (stack.length && height[stack.at(-1)] < current) {
				const mid = stack.pop()
				if (stack.length) {
					const left = stack.at(-1)
					const h = Math.min(height[left], height[i]) - height[mid]
					const w = i - left - 1
					res += h * w
				}
			}
			stack.push(i)
		}
	}
	return res
}

console.log(trap([4, 2, 0, 3, 2, 5]))
