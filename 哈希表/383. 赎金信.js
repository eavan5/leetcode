/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	const map = Array(26).fill(0),
		base = 'a'.charCodeAt()
	for (const character of magazine) {
		map[character.charCodeAt() - base]++
	}
	for (const character of ransomNote) {
		const index = character.charCodeAt() - base
		if (!map[index]) return false
		map[index]--
	}
	return true
}
