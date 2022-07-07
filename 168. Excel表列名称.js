/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
	let result = ''
	while (columnNumber > 0) {
		result = String.fromCharCode(((columnNumber - 1) % 26) + 65) + result
		columnNumber = ((columnNumber - 1) / 26) >> 0
	}
	return result
}
// 701 =  26**2+25 = ZY
console.log(convertToTitle(701))
