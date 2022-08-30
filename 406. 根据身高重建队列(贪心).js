/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
	people.sort((a, b) => {
		if (a[0] !== b[0]) {
			return b[0] - a[0]
		} else {
			return a[1] - b[1]
		}
	})
	const res = []
	for (let i = 0; i < people.length; i++) {
		const current = people[i]
		res.splice(current[1], 0, current)
	}
	return res
}
