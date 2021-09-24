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

function kthToLast(head: ListNode | null, k: number): number {
  let l1 = head, l2 = head
  while (k && l2) {
    k--
    l2 = l2.next
  }
  while (l1 && l2) {
    l1 = l1.next
    l2 = l2.next
  }
  return l1?.val || 0
};