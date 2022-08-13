/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	const arr = Array.from(s)
	removeExtraSpaces(arr)
	reverse(arr, 0, arr.length - 1)
	let start = 0
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] === ' ' || arr[i] === undefined) {
			// 判断===arr.length和判断undefined，是为了把最后一个单词也给反转了
			reverse(arr, start, i - 1)
			start = i + 1
		}
	}
	return arr.join('')
}

function removeExtraSpaces(arr) {
	// 移除多余的空格
	let slow = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === ' ' && (arr[i - 1] === ' ' || i === 0)) {
			continue
		} else {
			arr[slow] = arr[i]
			slow++
		}
	}
	// 上面的不能移除末尾只有一个空格的情况
	arr.length = arr.at(-1) === ' ' ? slow - 1 : slow
}

function reverse(arr, start, end) {
	while (start < end) {
		;[arr[start], arr[end]] = [arr[end], arr[start]]
		start++
		end--
	}
}
