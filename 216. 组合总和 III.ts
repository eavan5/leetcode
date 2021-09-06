function combinationSum3(k: number, n: number): number[][] {
  let res: number[][] = []
  let sum = 0
  function backtracking(temp: number[] = [], head: number = 1) {
    if (temp.length === k) {
      if(sum === n) res.push(temp.slice()) // 到了K位到目标值
      return
    }
    if(sum > n)  return
    for (let i = head; i < 10; i++) {
      if(temp.length===k) continue
      temp.push(i)
      sum += i
      backtracking(temp, i + 1)
      sum-=i
      temp.pop()
    }
  }
  backtracking()
  return res
};

