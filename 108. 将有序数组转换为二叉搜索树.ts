import {TreeNode} from './types';
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

function recursion(nums: number[],start: number,end: number):TreeNode | null {
  if (start > end) return null
  const mid = (start+end)/2 >>0
  const root = new TreeNode(nums[mid])
  root.left = recursion(nums,start,mid-1)
  root.right = recursion(nums,mid+1,end)
  return root
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  return recursion(nums,0,nums.length-1)
};