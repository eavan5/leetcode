import { TreeNode } from './types'
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
//比较左右高度
function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) return false
  return isBalanced(root.left) && isBalanced(root.right)
  function getHeight(tree: TreeNode | null): number {
    if (!tree) return 0
    return Math.max(getHeight(tree.left), getHeight(tree.right)) + 1
  }
};