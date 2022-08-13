/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
	const res = new Array(temperatures.length).fill(0)
	const stack = []
	for (let i = 0; i < temperatures.length; i++) {
		while (stack.length && temperatures[stack.at(-1)] < temperatures[i]) {
			res[stack.at(-1)] = i - stack.at(-1)
			stack.pop()
		}
		stack.push(i)
	}
	return res
}
