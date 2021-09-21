function moveZeroes(nums: number[]): void {
  let s = 0
  for (let f = 0; f < nums.length; f++) {
    if (nums[f]) {
      nums[s++] = nums[f]
    }
  }
  for (; s < nums.length; s++) {
    nums[s] = 0
  }
};