/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length !== t.length) return false
	const map = new Map()
	for (const character of s) {
		map.set(character, !map.has(character) ? 1 : map.get(character) + 1)
	}

	for (const character of t) {
		const count = map.get(character)
		if (!count) return false
		if (count === 1) {
			map.delete(character)
		} else {
			map.set(character, count - 1)
		}
	}
	return !map.size
}

console.log(isAnagram('anagram', 'nagaram'))
