/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
	while (n && n % 4 === 0) {
		n /= 4
	}
	return n === 1
}
