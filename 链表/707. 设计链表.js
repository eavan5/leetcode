class ListNode {
	constructor(val = null, next = null) {
		this.val = val
		this.next = next
	}
}

var MyLinkedList = function () {
	this._size = 0
	this._head = null
	this._tail = null
}

MyLinkedList.prototype.getNode = function (index) {
	if (index < 0 || index >= this._size) return null
	// 创建虚拟头节点
	let cur = new ListNode(0, this._head)
	// 0 -> head
	while (index-- >= 0) {
		cur = cur.next
	}
	return cur
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
	if (index < 0 || index >= this._size) return -1
	// 获取当前节点
	return this.getNode(index).val
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
	const node = new ListNode(val, this._head)
	this._head = node
	this._size++
	if (!this._tail)
		// 千万别忘记了
		this._tail = node
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
	// const end = new ListNode(val)
	// this._tail.next = end
	// this._size++
	// this._tail = end
	// 不能像上面这样写,因为this._tail可能为空
	const end = new ListNode(val)
	if (!this._tail) {
		this._size++
		this._tail = end
		this._head = end
		return
	}
	this._size++
	this._tail.next = end
	this._tail = end
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
	if (index > this._size) return
	if (index <= 0) {
		this.addAtHead(val)
		return
	} else if (index === this._size) {
		this.addAtTail(val)
		return
	}
	let prev = new ListNode(null, this._head)
	while (index-- > 0) {
		prev = prev.next
	}
	prev.next = new ListNode(val, prev.next)
	this._size++
}

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
	if (index < 0 || index >= this._size) return
	if (index === 0) {
		this._head = this._head.next
		// 如果删除的这个节点同时是尾节点，要处理尾节点
		if (index === this._size - 1) {
			this._tail = this._head
		}
		this._size--
		return
	}
	// 获取目标节点的上一个的节点
	const node = this.getNode(index - 1)
	node.next = node.next.next
	// 处理尾节点
	if (index === this._size - 1) {
		this._tail = node
	}
	this._size--
	return
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
