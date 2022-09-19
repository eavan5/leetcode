/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
	let pre = values[0]
	let res = 0
	for (let i = 1; i < values.length; i++) {
		res = Math.max(pre + values[i] - i, res)
		pre = Math.max(pre, values[i] + i)
	}
	return res
}
