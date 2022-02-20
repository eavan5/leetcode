/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  let max = 0
  recursion(root)
  return max
  function recursion (root, maxDeep = 0) {
    if (root) {
      maxDeep++
      max = Math.max(maxDeep, max)
      recursion(root.left, maxDeep)
      recursion(root.right, maxDeep)
    }
  }
};

var maxDepth2 = function (root) {
  if (!root) return 0
  const left = maxDepth2(root.left)
  const right = maxDepth2(root.right)
  return Math.max(left, right) + 1
};
// @lc code=end

