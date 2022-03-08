/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = []
  if (root == null) return res;
  const queue = [root]
  while (queue.length) {
    let size = queue.length
    const level = []
    while (size--) {
      const cur = queue.shift()
      level.push(cur.val)
      for (const item of cur.children) {
        queue.push(item)
      }
    }
    res.push(level)
  }
  return res
};
