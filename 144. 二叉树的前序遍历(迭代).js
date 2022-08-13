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
var preorderTraversal = function (root) {
  const res = []
  if (!root) return []
  const treeStack = [root]
  while (treeStack.length) {
    const item = treeStack.pop()
    res.push(item.val)
    const { left, right } = item
    right && treeStack.push(right)
    left && treeStack.push(left)
  }
  return res
};