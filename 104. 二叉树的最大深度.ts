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

import { TreeNode } from "./types"

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  let res = 1
  function deep(target: TreeNode | null, count: number) {
    if (!target) return
    deep(target.left, count + 1)
    deep(target.right, count + 1)
    res = Math.max(res, count)
  }
  deep(root, res)
  return res
};
function maxDepth2(root: TreeNode | null): number {
  if (!root) {
    return 0
  } else {
    let left = maxDepth2(root.left)
    let right = maxDepth2(root.right)
    return Math.max(left, right) + 1
  }
};