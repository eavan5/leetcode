const exist = (board, word) => {
	const m = board.length
	const n = board[0].length
	const used = new Array(m)
	for (let i = 0; i < m; i++) {
		used[i] = new Array(n)
	}
	const canFind = (row, col, i) => {
		if (i == word.length) {
			return true
		}
		if (row < 0 || row >= m || col < 0 || col >= n) {
			return false
		}
		if (used[row][col] || board[row][col] != word[i]) {
			return false
		}
		used[row][col] = true
		const canFindRest =
			canFind(row + 1, col, i + 1) ||
			canFind(row - 1, col, i + 1) ||
			canFind(row, col + 1, i + 1) ||
			canFind(row, col - 1, i + 1)

		if (canFindRest) {
			return true
		}
		used[row][col] = false
		return false
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] == word[0] && canFind(i, j, 0)) {
				return true
			}
		}
	}
	return false
}
