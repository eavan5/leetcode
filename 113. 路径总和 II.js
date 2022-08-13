/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
// 递归写 太垃圾了

var pathSum = function (root, targetSum) {
  const res = []
  recursion(root)
  return res
  function recursion (root, temp = []) {
    if (!root) return
    temp.push(root.val)
    // if (sum > targetSum) return  // 这个多此一举 有些需要的都是很小的数 
    const sum = temp.reduce((p, c) => p + c, 0)
    if (sum === targetSum && !root.left && !root.right) {
      res.push([...temp])
      return
    }
    recursion(root.left, [...temp])
    recursion(root.right, [...temp])
  }
};