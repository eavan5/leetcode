/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let left = 0,
		right = numbers.length - 1
	while (left < right) {
		const sum = target - numbers[left] - numbers[right]
		if (!sum) {
			return [left + 1, right + 1]
		} else if (sum < 0) {
			right--
		} else {
			left++
		}
	}
}
