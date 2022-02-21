/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let low = head, fast = low
  while (k && fast) {
    fast = fast.next
    k--
  }
  while (fast) {
    fast = fast.next
    low = low.next
  }
  return low
};