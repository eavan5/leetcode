/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const returnNode = new ListNode(-1) //哨兵节点
  let head = returnNode
  while (list1 !== null && list2 !== null) {  // 为什么这么循环呢  问题就在于这样搞效率高,因为都是已经排好序的了,这样的条件能减少一方的循环数目
    if (list1.val <= list2.val) {
      head.next = list1
      list1 = list1.next
    } else {
      head.next = list2
      list2 = list2.next
    }
    head = head.next
  }
  head.next = list1 || list2 // 为什么这么做,因为循环之后有一方可能没循环完,所以要续上
  return returnNode.next
};
// @lc code=end

