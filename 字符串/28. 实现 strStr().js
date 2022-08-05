/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	const next = getNext(needle)
	let j = 0
	for (let i = 0; i < haystack.length; i++) {
		while (j > 0 && haystack[i] !== needle[j]) {
			j = next[j - 1]
		}
		if (haystack[i] === needle[j]) {
			j++
		}
		if (j === needle.length) {
			return i - needle.length + 1
		}
	}
	return -1

	function getNext(arr) {
		let next = [0]
		let j = 0
		for (let i = 1; i < arr.length; i++) {
			while (j > 0 && arr[i] !== arr[j]) {
				j = next[j - 1]
			}
			if (arr[i] === arr[j]) {
				j++
			}
			next[i] = j
		}
		return next
	}
}
