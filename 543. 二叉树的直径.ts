import { TreeNode } from "./types";
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let res = 0;
  function recursion(tree: TreeNode | null): number {
    if (!tree) return 0;
    const l = recursion(tree.left);
    const r = recursion(tree.right);
    res = Math.max(res, l + r);
    return Math.max(l, r) + 1;
  }
  recursion(root);
  return res;
}
