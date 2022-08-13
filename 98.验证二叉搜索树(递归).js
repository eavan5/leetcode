/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
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
 * @return {boolean}
 */
var isValidBST = function (root, low = null, high = null) {
	if (!root) return true
	const val = root.val
	if (low !== null && val <= low) return false
	if (high !== null && val >= high) return false
	return isValidBST(root.left, low, val) && isValidBST(root.right, val, high)
}
// @lc code=end
// [5,4,6,null,null,3,7]
//  5
// 4     6
//       3   7
