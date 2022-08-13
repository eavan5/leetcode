/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
	let slow = head,
		fast = head
	while (fast?.next) {
		slow = slow.next
		fast = fast.next.next
		if (slow === fast) {
			while (head !== fast) {
				head = head.next
				fast = fast.next
			}
			return head
		}
	}
	return null
}
