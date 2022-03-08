/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function (root) {
  const res = []
  recursion(root)
  return res.reduce((a, b) => a + b)
  function recursion (tree, temp = []) {
    temp.push(tree.val)
    if (!tree.left && !tree.right) {
      res.push(temp.reduce((p, c) => p * 10 + c))
      return
    }
    tree.left && recursion(tree.left, [...temp])
    tree.right && recursion(tree.right, [...temp])
  }

};
// @lc code=end

