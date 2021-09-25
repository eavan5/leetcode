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

function isValidBST(root: TreeNode | null): boolean {
  var recursion = function (root: TreeNode | null): boolean {
    if (root === null) {
      return true
    }
    if (recursion(root.left) && preVal < root.val) {
      preVal = root.val
      return recursion(root.right)
    }
    return false
  }

  let preVal = -Infinity
  return recursion(root)
};