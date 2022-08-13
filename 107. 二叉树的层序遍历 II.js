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
var levelOrderBottom = function (root) {
  if (!root) return []
  const node = [root]
  const res = []
  while (node.length) {
    const len = node.length
    const arr = []
    for (let i = 0; i < len; i++) {
      const item = node.shift()
      arr.push(item.val)
      item.left && node.push(item.left)
      item.right && node.push(item.right)
    }
    res.unshift(arr)
  }
  return res
};