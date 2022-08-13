/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0
  let min = Number.MAX_SAFE_INTEGER
  dfs(root)
  return min
  function dfs (root, deep = 1) {
    if (!root.left && !root.right) {
      return min = Math.min(min, deep)
    }
    root?.left && dfs(root.left, deep + 1)
    root?.right && dfs(root.right, deep + 1)
  }
};
// @lc code=end

