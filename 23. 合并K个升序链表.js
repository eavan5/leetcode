var mergeKLists = function (lists) {
	function transform(l, arr) {
		while (l) {
			arr.push(l.val)
			l = l.next
		}
	}

	let arr = []
	let res = new ListNode(null)

	lists.forEach(item => transform(item, arr))
	arr.sort((a, b) => a - b)
	for (let i = arr.length - 1; i >= 0; i--) {
		let temp = new ListNode(null)
		res.val = arr[i]
		temp.next = res
		res = temp
	}

	return res.next
}
