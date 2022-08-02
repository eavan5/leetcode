/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	const set = new Set()
	while (!set.has(n)) {
		set.add(n)
		n = getSun(n)
	}
	return n === 1
}

function getSun(n) {
	let sum = 0
	while (n) {
		sum += (n % 10) ** 2
		n = (n / 10) >> 0
	}
	return sum
}
