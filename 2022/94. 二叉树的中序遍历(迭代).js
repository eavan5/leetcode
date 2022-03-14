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
var inorderTraversal = function (root) {
  const res = []
  if (!root) return res
  const stack = []
  while (root) {
    stack.push(root)
    root = root.left
  }
  while (stack.length) {
    const item = stack.pop()
    res.push(item.val)
    let node = item.right
    while (node) {
      stack.push(node)
      node = node.left
    }
  }
  return res
};