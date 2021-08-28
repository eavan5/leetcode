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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const l3 = new ListNode(0)
  let p1 = l1,
    p2 = l2,
    p3 = l3,
    temp = 0
  while (p1 || p2 || temp) {
    const n1 = p1?.val || 0
    const n2 = p2?.val || 0
    const sum = n1 + n2 + temp
    temp = Math.floor(sum / 10)
    p3.next = new ListNode(sum % 10)
    p1 = p1?.next
    p2 = p2?.next
    p3 = p3.next
  }
  return l3.next
};