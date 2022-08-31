/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
	const sentinel = new ListNode(null, head)
	let pre = sentinel
	for (let i = 0; i < left - 1; i++) {
		pre = pre.next
	}
	let cur = pre.next
	for (let i = 0; i < right - left; i++) {
		const next = cur.next
		cur.next = next.next
		next.next = pre.next
		pre.next = next
	}
	return sentinel.next
}
