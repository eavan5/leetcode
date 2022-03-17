/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return isSame(root?.left, root?.right)
  function isSame (left, right) {
    if (!left && !right) return true
    if (!left || !right) return false
    return left.val === right.val && isSame(left.left, right.right) && isSame(left.right, right.left)
  }
};