function subsetsWithDup(nums: number[]): number[][] {
  let res: number[][] = []
  nums.sort((a, b) => a - b)
  function backtracking(arrow: number = 0, temp: number[] = []) {
    res.push(temp.slice())
    for (let i = arrow; i < nums.length; i++) {
      const current = nums[i];
      if (i > arrow && current === nums[i - 1]) continue; // 这里是一个细节 剪枝的时候画图最清晰
      temp.push(current)
      backtracking(i+1, temp)
      temp.pop()
    }
  }
  backtracking()
  return res
};