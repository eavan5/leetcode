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
var sortList = function (head) {
  if (!head || !head.next) return head
  let slow = head, fast = head
  let preSlow = null
  while (fast && fast.next) {
    preSlow = slow
    slow = slow.next
    fast = fast.next.next
  }
  preSlow.next = null // 把链表切成两份
  const l = sortList(head)
  const r = sortList(slow)
  return merge(l, r)
};

function merge (left, right) {
  const pre = new ListNode()
  let preTemp = pre
  while (left && right) {
    if (left.val < right.val) {
      preTemp.next = left
      left = left.next
    } else {
      preTemp.next = right
      right = right.next
    }
    preTemp = preTemp.next
  }
  if (left) preTemp.next = left
  if (right) preTemp.next = right
  return pre.next
}

