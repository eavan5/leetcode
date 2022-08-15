/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	const maxV = Math.max(...height)
	const maxIndex = height.indexOf(maxV)
	let res = 0
	let lMin = height[0]
	for (let i = 1; i < maxIndex; i++) {
		if (lMin > height[i]) {
			res += lMin - height[i]
		} else {
			lMin = height[i]
		}
	}
	let rMin = height.at(-1)
	for (let i = height.length - 2; i > maxIndex; i--) {
		if (rMin > height[i]) {
			res += rMin - height[i]
		} else {
			rMin = height[i]
		}
	}
	return res
}

// 性能有点差
// 思路参考 https://www.bilibili.com/video/BV1HE411Z7By?from=search&seid=15107945570527186601&spm_id_from=333.337.0.0

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
