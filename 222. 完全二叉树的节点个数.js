/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.cn/problems/count-complete-tree-nodes/solution/chang-gui-jie-fa-he-ji-bai-100de-javajie-fa-by-xia/
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  if(!root) return 0 
  const [left,right] = [getLevel(root.left),getLevel(root.right)]
  if(left===right){ // 说明至少左边的树是完整的
    return (1<<left) + countNodes(root.right)
  }else{
    return (1<<right) + countNodes(root.left)
  }

};

function getLevel(node){
  let level = 0
  while(node){
    level++
    node = node.left
  }
  return level
}