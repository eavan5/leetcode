/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
  let max = Number.MIN_SAFE_INTEGER
  dfs(root)
  return max
  function dfs (root) {
    if (root === null) return 0
    const left = dfs(root.left), right = dfs(root.right)
    max = Math.max(max, root.val + (left > 0 ? left : 0) + (right > 0 ? right : 0))
    return root.val + Math.max(left, right, 0)
  }

};
// @lc code=end

