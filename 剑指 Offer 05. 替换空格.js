/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
	//  计算空格的数目
	const arr = s.split('')
	const spaceCount = arr.reduce((p, c) => p + (c === ' ' ? 1 : 0), 0)
	let left = s.length - 1,
		right = s.length - 1 + spaceCount * 2
	while (left >= 0) {
		if (arr[left] === ' ') {
			arr[right--] = 0
			arr[right--] = 2
			arr[right--] = '%'
		} else {
			arr[right--] = arr[left]
		}
		left--
	}
	return arr.join('')
}

console.log(replaceSpace('We are happy.'))
