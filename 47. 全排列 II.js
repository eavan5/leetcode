/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	nums.sort((a, b) => a - b)
	const used = new Set()
	const res = []
	backtracking()
	return res
	function backtracking(temp = []) {
		if (temp.length === nums.length) {
			return res.push(temp.concat())
		}
		for (let i = 0; i < nums.length; i++) {
			if (used.has(i)) continue
			if (i > 0 && nums[i] === nums[i - 1] && !used.has(i - 1)) {
				continue
			}
			temp.push(nums[i])
			used.add(i)
			backtracking(temp)
			temp.pop()
			used.delete(i)
		}
	}
}
