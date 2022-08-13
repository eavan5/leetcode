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
 * @return {string[]}
 */

// 空间复杂度有点高 待优化

var binaryTreePaths = function (root) {
  const res = []
  dfs(root)
  return res
  function dfs (node, temp = []) {
    const current = [...temp, node.val]
    if (!node.left && !node.right) {
      res.push(current.join('->'))
    }
    node.left && dfs(node.left, [...current])
    node.right && dfs(node.right, [...current])
  }
};