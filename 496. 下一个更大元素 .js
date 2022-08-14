/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
	const stack = []
	const map = new Map()
	for (let i = 0; i < nums2.length; i++) {
		while (stack.length && nums2[i] > nums2[stack.at(-1)]) {
			map.set(nums2[stack.pop()], nums2[i])
		}
		stack.push(i)
	}
	const res = []
	for (let i = 0; i < nums1.length; i++) {
		res.push(map.get(nums1[i]) || -1)
	}
	return res
}
