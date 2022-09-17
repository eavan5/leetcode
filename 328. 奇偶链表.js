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
var oddEvenList = function (head) {
	if (!head) return null
	let odd = head,
		even = head.next
	let evenHead = even
	while (even?.next) {
		odd.next = even.next
		odd = odd.next
		even.next = odd.next
		even = even.next
	}
	odd.next = evenHead
	return head
}
