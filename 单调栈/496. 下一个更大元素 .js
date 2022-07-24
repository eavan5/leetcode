/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
	const map = new Array(nums2.length).fill(-1)
	const stack = [],
		res = new Array(nums1.length).fill(-1)
	for (let i = 0; i < nums2.length; i++) {
		const current = nums2[i]
		while (stack.length && nums2[stack.at(-1)] < current) {
			map[stack.pop()] = current
		}
		stack.push(i)
	}

	for (let i = 0; i < nums1.length; i++) {
		const index = nums2.indexOf(nums1[i])
		res[i] = map[index]
	}

	return res
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))

// stack 2
// map  [1,2,0,0]
