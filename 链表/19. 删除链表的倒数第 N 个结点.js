/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	const pre = new ListNode(null, head)
	let fast = pre
	let slow = pre
	while (n--) {
		fast = fast.next
	}
	while (fast.next) {
		fast = fast.next
		slow = slow.next
	}
	slow.next = slow.next.next

	return pre.next
}
