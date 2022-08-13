/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  if (!root.children.length) return 1
  let res = 1
  for (let i = 0; i < root.children.length; i++) {
    res = Math.max(maxDepth(root.children[i]) + 1, res)
  }
  return res
};