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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (inorder.length === 0) return null;
  const root = new TreeNode(preorder[0]);
  const pivot = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, pivot + 1), inorder.slice(0, pivot));
  root.right = buildTree(preorder.slice(pivot + 1), inorder.slice(pivot + 1));
  return root;
}
