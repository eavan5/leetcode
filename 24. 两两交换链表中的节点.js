/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
	let prev = new ListNode(0, head)
	let arrow = prev
	while (head?.next) {
		const next = head.next.next
		arrow.next = head.next
		head.next.next = head
		head.next = next
		arrow = head
		head = next
	}
	return prev.next
}
