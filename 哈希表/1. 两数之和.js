/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const map = new Map()
	for (let i = 0; i < nums.length; i++) {
		const current = nums[i]
		if (map.has(current)) {
			return [i, map.get(current)]
		}
		map.set(target - current, i)
	}
}
