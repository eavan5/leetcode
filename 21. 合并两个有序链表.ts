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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const prev = new ListNode(0)
  let head = prev
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      head.next = l1
      l1 = l1.next
    } else {
      head.next = l2
      l2 = l2.next
    }
    head = head.next
  }
  //因为head又走了一层 所以 此时可能还有一个未被合并 
  head.next = l1 === null ? l2 :l1
  return prev.next
};