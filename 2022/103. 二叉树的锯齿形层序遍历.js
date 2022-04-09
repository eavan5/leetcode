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
var zigzagLevelOrder = function (root) {
  if (!root) return []
  let arr = [root]
  let flag = false
  const res = []
  while (arr.length) {
    let size = arr.length
    const temp = []
    while (size) {
      let item = arr.shift()
      temp.push(item.val)
      if (item.left) arr.push(item.left)
      if (item.right) arr.push(item.right)
      size--
    }
    if (flag) {
      temp.reverse()
    }
    res.push(temp)
    flag = !flag
  }
  return res
};