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

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  function dfs(
    treeNode1: TreeNode | null,
    treeNode2: TreeNode | null
  ): TreeNode | null {
    if(!treeNode1) return treeNode2
    if (!treeNode2) return treeNode1
    treeNode1.val += treeNode2.val
    treeNode1.left = dfs(treeNode1.left, treeNode2.left);
    treeNode1.right = dfs(treeNode1.right, treeNode2.right);
    return treeNode1
  }
  return dfs(root1, root2);
}
