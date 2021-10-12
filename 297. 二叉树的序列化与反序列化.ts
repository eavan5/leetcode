import {TreeNode} from './types'
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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if(!root) return '$'
  return `${root.val},${serialize(root.left)},${serialize(root.right)}`
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const treeList = data.split(',')
  function recursion(treeList:string[]): TreeNode | null {
    let current:string | number | undefined = treeList.shift()
    if (current === '$') return null
    else current = Number(current)
    const root = new TreeNode(current)
    root.left = recursion(treeList)
    root.right = recursion(treeList)
    return root
  }
  return recursion(treeList)
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */