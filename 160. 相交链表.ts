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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let head1 = headA, head2 = headB
  while (head1 !== head2) {
    head1 = !head1 ? headB : head1.next
    head2 = !head2 ? headA : head2.next
  }
  return head1
};