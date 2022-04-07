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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function recursion (left, right) {
    if (!left && !right) return true
    if (!right || !left) return false
    return left.val === right.val && recursion(left.left, right.right) && recursion(left.right, right.left)
  }
  return recursion(root.left, root.right)
};
