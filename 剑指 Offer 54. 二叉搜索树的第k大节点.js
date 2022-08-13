/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  const arr = []
  dfs(root)
  return arr.at(-k)
  function dfs (node) {
    if (!node) return
    dfs(node.left)
    arr.push(node.val)
    dfs(node.right)
  }

};