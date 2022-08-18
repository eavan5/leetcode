/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
	g.sort((a, b) => a - b)
	s.sort((a, b) => a - b)
	let a1 = 0,
		a2 = 0
	while (a1 < g.length && a2 < s.length) {
		if (g[a1] <= s[a2]) {
			a1++
		}
		a2++
	}
	return a1
}
