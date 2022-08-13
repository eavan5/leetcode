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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const res = []
  dfs(root)
  function dfs (node) {
    if (!node) return
    dfs(node.left)
    res.push(node.val)
    if (res.length === k) return
    dfs(node.right)
  }
  return res.at(k - 1)
};