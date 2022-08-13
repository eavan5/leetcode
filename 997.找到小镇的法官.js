/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
	const left = new Array(n + 1).fill(0),
		right = new Array(n + 1).fill(0)
	for (let i = 0; i < trust.length; i++) {
		left[trust[i][0]]++
		right[trust[i][1]]++
	}
	for (let i = 1; i <= n; i++) {
		if (left[i] === 0 && right[i] === n - 1) return i
	}
	return -1
}

console.log(
	findJudge(4, [
		[1, 2],
		[1, 3],
		[2, 1],
		[2, 3],
		[1, 4],
		[4, 3],
		[4, 1],
	])
)
