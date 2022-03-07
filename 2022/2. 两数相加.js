/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 输入：l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
// 输出：     [8, 9, 9, 9, 0, 0, 0, 1]
var addTwoNumbers = function (l1, l2) {
  let temp = 0
  let res = arr = new ListNode()
  while (l1 || l2 || temp) {
    const v1 = l1?.val || 0
    const v2 = l2?.val || 0
    const sum = v1 + v2 + temp
    arr.next = new ListNode(sum % 10)
    temp = Math.floor(sum / 10)
    arr = arr.next
    l1 = l1?.next
    l2 = l2?.next
  }
  return res.next
};