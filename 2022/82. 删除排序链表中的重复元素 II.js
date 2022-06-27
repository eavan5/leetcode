/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const dummy = new ListNode(0, head)
  let point = dummy
  while (point.next && point.next.next) {
    if (point.next.val === point.next.next.val) {
      const val = point.next.val
      while (point.next && point.next.val === val) point.next = point.next.next
    } else {
      point = point.next
    }
  }
  return dummy.next
};