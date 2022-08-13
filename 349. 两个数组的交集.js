/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
	const set = new Set(nums1)
	const res = new Set()
	for (const character of nums2) {
		if (set.has(character)) {
			res.add(character)
		}
	}
	return Array.from(res)
}

console.log(intersection([1, 2, 2, 1], [2, 2]))
