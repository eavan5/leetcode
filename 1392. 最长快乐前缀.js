/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function (s) {
	const next = [0]
	let j = 0
	for (let i = 1; i < s.length; i++) {
		while (j > 0 && s.charAt(i) !== s.charAt(j)) {
			j = next[j - 1]
		}
		if (s.charAt(i) === s.charAt(j)) {
			j++
		}
		next[i] = j
	}
	return s.substr(0, next.at(-1))
}
