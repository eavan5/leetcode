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
 * @return {number[]}
 */
var rightSideView = function(root) {
  const res = []
  dfs(root)
  return res
  function dfs(node,deepth=0){
    if(!node) return
    if(deepth===res.length){
      res[deepth] = node.val
    }
    deepth++
    dfs(node.right,deepth)
    dfs(node.left,deepth)
  }
};