function restoreIpAddresses(s: string): string[] {
  const start = 0
  let res: string[] = [],
    temp: string[] = []
  if (s.length < 3 || s.length > 12) return res;
  handleTemp(s, start, temp, res)
  return res
  function handleTemp(s: string, start: number, temp: string[], res: string[]): void {
    if (temp.length > 4) {
      return
    } else if (temp.length === 4 && start === s.length) {
      res.push(temp.join('.'))
      return
    }
    for (let index = start; index < s.length; index++) {
      // 不能以01开头 只能0.22 或者 1.0.这样
      if (index + 1 - start > 1 && s[start] === '0') return
      // 先暂存一个
      const one = s.slice(start, index + 1)
      if (+one > 255) return
      temp.push(one)
      //递归
      handleTemp(s, index + 1, temp, res)
      temp.pop()
    }
  }

};