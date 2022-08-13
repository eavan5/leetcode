/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (!root) return null
  mirrorTree(root.right)
  mirrorTree(root.left);
  [root.left, root.right] = [root.right, root.left]
  return root
};