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
		fast = head,
		res = head
	while (fast?.next) {
		slow = slow.next
		fast = fast.next.next
		if (slow === fast) {
			while (res !== fast) {
				res = res.next
				fast = fast.next
			}
			return res
		}
	}
	return null
}
