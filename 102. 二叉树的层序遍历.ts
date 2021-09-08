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

import { TreeNode } from "./types";

function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = []
  function deep(tree: TreeNode | null, num: number) {
    if (!tree) return
    if (!res[num]) {
      res[num] = [tree.val]
    } else {
      res[num].push(tree.val)
    }
    deep(tree.left, num+1)
    deep(tree.right, num+1)
  }
  deep(root, 0)
  return res
};