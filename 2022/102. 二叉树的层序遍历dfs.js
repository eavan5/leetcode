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
  recursion(root)
  return res
  function recursion (root, temp = 0) {
    if (!root) return
    if (res[temp]) {
      res[temp].push(root.val)
    } else {
      res[temp] = [root.val]
    }
    recursion(root.left, temp + 1)
    recursion(root.right, temp + 1)
  }
};