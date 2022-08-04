/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
	n %= s.length
	const arr = s.split('')
	const str = arr.slice(0, n)
	arr.splice(0, n)
	return [...arr, ...str].join('')
}
