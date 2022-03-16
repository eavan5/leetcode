/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let res = 0
  for (let i = 0; i < grid.length; i++) {
    const cur = grid[i]
    for (let j = 0; j < cur.length; j++) {
      if (cur[j] === '1') {
        res++
        // 开始消除别的岛屿
        dfs(i, j)
      }
    }
  }
  return res
  function dfs (i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
      return
    }
    grid[i][j] = "0"
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }
};

numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]])