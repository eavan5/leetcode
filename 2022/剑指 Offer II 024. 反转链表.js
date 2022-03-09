/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var reverseList = function (head) {
  let res = null
  while (head) {
    const temp = head.next
    head.next = res
    res = head
    head = temp
  }
  return res
};