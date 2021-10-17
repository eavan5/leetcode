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

function isPalindrome(head: ListNode | null): boolean {
  const arr = []
  while (head) {
    arr.push(head.val)
    head=head.next
  }
  let l = 0, r = arr.length - 1
  while (l < r) {
    if (arr[l] !== arr[r]) {
      return false
    }
    l++
    r--
  }
  return true
}
