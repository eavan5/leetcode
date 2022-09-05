/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) return []
	const queue = [root]
	const res = []
	let flag = true
	while (queue.length) {
		const size = queue.length
		const temp = []
		for (let i = 0; i < size; i++) {
			const current = queue.shift()
			temp.push(current.val)
			current.left && queue.push(current.left)
			current.right && queue.push(current.right)
		}
		if (!flag) {
			temp.reverse()
		}
		flag = !flag
		res.push(temp)
	}
	return res
}
