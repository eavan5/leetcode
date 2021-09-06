function subsets(nums: number[]): number[][] {
  let res: Array<number[]> = []
  function backtracking(temp: number[] = [], start: number = 0) {
    res.push(temp.slice())
    if(start===nums.length) return
    for (let i = start; i < nums.length; i++) {
      temp.push(nums[i])
      backtracking(temp, i + 1)
      temp.pop()
    }
  }
  backtracking()
  return res
};