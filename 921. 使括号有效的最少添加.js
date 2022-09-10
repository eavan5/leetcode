/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
	let leftNeed = 0,
		rightNeed = 0
	for (let i of s) {
		if (i === '(') {
			rightNeed++
		}
		if (i === ')') {
			rightNeed--
			if (rightNeed === -1) {
				rightNeed = 0
				leftNeed++
			}
		}
	}
	return leftNeed + rightNeed
}
