function minSubArrayLen(target: number, nums: number[]): number {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    let res2 = 1
    // 如果第一个就大于则最少1个
    if (current >= target) return res2
    for (let j = i + 1; j < nums.length; j++) {
      res2++
      if ((current += nums[j]) >= target) {
        (res2 < res||!res) && (res = res2)
        // console.log(i,j,res2);
        
        break
      }
    }
  }
  return res
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
