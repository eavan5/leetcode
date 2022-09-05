/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
// 使用层序遍历，并只保留每层最后一个节点的值
var rightSideView = function (root) {
  const res = []
  if (!root) return res
  const stack = [root]
  while (stack.length) {
    const len = stack.length
    const level = []
    for (let i = 0; i < len; i++) {
      const item = stack.shift()
      level.push(item.val)
      item.left && stack.push(item.left)
      item.right && stack.push(item.right)
    }
    res.push(level.at(-1))
  }
  return res

};
// @lc code=end

