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

function isSymmetric(root: TreeNode | null): boolean {
  const recursion = (left: TreeNode | null | undefined, right: TreeNode | null | undefined): boolean => {
    if (!left && !right) return true
    if (!left || !right) return false
    return left.val === right.val && recursion(left.left, right.right) && recursion(left.right, right.left)
  }
  return recursion(root?.left, root?.right)
};