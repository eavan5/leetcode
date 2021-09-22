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

function swapPairs(head: ListNode | null): ListNode | null {
  const temp = new ListNode(0, head)
  let prev = temp
  while (head && head.next) {
    prev.next = head.next
    const next = head.next
    head.next = next.next
    next.next = head
    
    prev = head
    head = head.next
  }
  return temp.next
};