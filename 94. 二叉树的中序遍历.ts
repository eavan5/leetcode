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

function inorderTraversal(root: TreeNode | null, temp: number[] = []): number[] {
  if (!root) return temp
  inorderTraversal(root.left,temp)
  inorderTraversal(root.right, temp)
  temp.push(root.val)
  return temp
};