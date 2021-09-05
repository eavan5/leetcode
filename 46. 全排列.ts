function permute(nums: number[]): number[][] {
  let res: number[][] = []
  const set = new Set()
  function backtracking(temp: number[]) {
    if (temp.length === nums.length) {
      res.push(temp.slice())
      return
    }
    for (const item of nums) {
      if (set.has(item)) continue  //如果发现有相似的 就跳过
      temp.push(item)
      set.add(item)  //记录一下当前使用到的数
      backtracking(temp)  //递归
      temp.pop() //回溯 
      set.delete(item)
    }
  }
  backtracking([])
  return res
};