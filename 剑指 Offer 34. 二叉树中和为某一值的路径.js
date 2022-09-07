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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
	const res = []
	dfs(root, target)
	return res
	function dfs(node, surplus, temp = []) {
		if (!node) return
		temp = [...temp, node.val]
		if (!node?.left && !node?.right && surplus === node.val) {
			res.push([...temp])
			return
		}
		surplus -= node.val
		dfs(node.left, surplus, [...temp])
		dfs(node.right, surplus, [...temp])
	}
}
