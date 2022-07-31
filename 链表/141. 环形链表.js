/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	let fast = head
	while (head) {
		head = head.next
		fast = fast?.next?.next
		if (fast === head) break
	}
	return !!head
}
