/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
	const dummy1 = new ListNode(null)
	const dummy2 = new ListNode(null)
	let p1 = dummy1,
		p2 = dummy2
	while (head) {
		if (head.val < x) {
			p1.next = head
			p1 = p1.next
		} else {
			p2.next = head
			p2 = p2.next
		}
		const temp = head.next
		head.next = null
		head = temp
	}
	p1.next = dummy2.next

	return dummy1.next
}
