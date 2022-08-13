/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
	const next = getNext(s)
	if (next.at(-1) !== 0 && s.length % (s.length - next.slice(-1)) === 0) return true
	return false
	function getNext(s) {
		const next = [0]
		let j = 0
		for (let i = 1; i < s.length; i++) {
			while (j > 0 && s[i] !== s[j]) j = next[j - 1]
			if (s[i] === s[j]) j++
			next[i] = j
		}
		return next
	}
}
