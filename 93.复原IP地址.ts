function restoreIpAddresses(s: string): string[] {
	const start = 0
	let res: string[] = [],
		temp: string[] = [] // 用放临时IP
	if (s.length < 4 || s.length > 12) return res
	handleTemp(s, start, temp, res)
	return res
	function handleTemp(s: string, start: number, temp: string[], res: string[]): void {
		if (temp.length > 4) return //大于4位 直接终止递归
		if (temp.length === 4 && start === s.length) {
			//滑动到最后一位 凑齐所有可能 直接终止
			res.push(temp.join('.'))
			return
		}
		for (let index = start; index < s.length; index++) {
			// 不能以01开头 只能0.22 或者 1.0.这样
			if (index > start && s[start] === '0') return
			// 先暂存一个
			const one = s.slice(start, index + 1)
			if (+one > 255) return
			temp.push(one)
			//递归
			handleTemp(s, index + 1, temp, res)
			//回溯
			temp.pop()
		}
	}
}

console.log(restoreIpAddresses('1234'))
