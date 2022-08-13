/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function reverseList (head) {
  while (head) {
    const temp = head.next
    head.next = res
    res = head
    head = temp
  }
}

var reverseKGroup = function (head, k) {
  let next = null
  let current = head
  let count = 1
  while (count < k) {
    current = current.next
    if (!current) return head
    count++
  }
  next = current.next // 保存一份后续做递归用
  current.next = null // 这个1是为了翻转 避免后续的被翻转  2是链表最后一个就tm是null
  reverseList(head)
  if (next) { //如果有后续 递归
    head.next = reverseKGroup(next, k)
  }
  return current
};