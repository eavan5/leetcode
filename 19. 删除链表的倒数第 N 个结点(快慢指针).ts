/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let prev = new ListNode(0, head),
    fast: ListNode | null = prev,
    slow: ListNode | null = prev
  while (n--) fast = fast!.next
  if(!fast) return prev.next
  while (fast.next) {
    slow = slow!.next
    fast = fast.next
  }
  slow!.next = slow!.next!.next
  return prev.next
};