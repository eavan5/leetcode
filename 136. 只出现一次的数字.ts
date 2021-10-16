function singleNumber(nums: number[]): number {
  let res = 0;
  for (const current of nums) {
    res ^= current;
  }
  return res
}
