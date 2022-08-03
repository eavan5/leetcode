/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	const length = s.length - 1
	const lenSplit = length >> 1
	for (let i = 0; i <= lenSplit; i++) {
		;[s[i], s[length - i]] = [s[length - i], s[i]]
	}
}
