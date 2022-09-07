/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const res = []
	const set = new Set()
	backtracking()
	return res
	function backtracking(temp = []) {
		if (temp.length === nums.length) {
			res.push([...temp])
			return
		}
		for (let i = 0; i < nums.length; i++) {
			const current = nums[i]
			if (set.has(current)) continue
			set.add(current)
			backtracking([...temp, current])
			set.delete(current)
		}
	}
}
