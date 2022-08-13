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
var postorderTraversal = function (root) {
  const res = []
  if (!root) return res
  const stack = [root]
  while (stack.length) {
    const item = stack.pop()
    res.push(item.val)
    item.left && stack.push(item.left)
    item.right && stack.push(item.right)
  }
  return res.reverse()
};