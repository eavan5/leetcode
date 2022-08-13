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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = []
  if (!root) return res
  const nodeStack = [root]
  while (nodeStack.length) {
    const size = nodeStack.length
    const temp = []
    for (let i = 0; i < size; i++) {
      const current = nodeStack.shift()
      temp.push(current.val)
      current.left && nodeStack.push(current.left)
      current.right && nodeStack.push(current.right)
    }
    res.push(temp)
  }
  return res
};