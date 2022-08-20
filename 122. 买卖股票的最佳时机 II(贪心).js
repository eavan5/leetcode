/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let count = 0,
		pre = prices[0]
	for (let i = 1; i < prices.length; i++) {
		if (pre < prices[i]) {
			count += prices[i] - pre
		}
		pre = prices[i]
	}
	return count
}
