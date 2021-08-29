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

// function hasCycle(head: ListNode | null): boolean {
//   const map = new Set()
//   while (head) {
//     if (!map.has(head)) {
//       map.add(head)
//     } else {
//       return true
//     }
//     head = head.next
//   }
//   return false
// };

// 快慢指针的解法

// function hasCycle2(head: ListNode | null): boolean {
//   let temp = head
//   while (head && temp && head.next) {
//     temp = head.next.next
//     head = head.next
//     if (head === temp) return true
//   }
//   return false
// };

function hasCycle(head: ListNode | null): boolean {
  let p1 = head,
    p2 = head
  while (p1 && p2 && p2.next) {
    p2 = p2.next.next
    if (p1 === p2) return true
    p1 = p1.next
  }
  return false
};