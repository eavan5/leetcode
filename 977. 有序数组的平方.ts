function sortedSquares(nums: number[]): number[] {
  return nums.map(item => item ** 2).sort((a, b) => a - b)
};

// 双指针
function sortedSquares2(nums: number[]): number[] {
  let l = 0, r = nums.length - 1;
  const res: number[] = []
  while (l <= r) {
    if (nums[l] ** 2 > nums[r] ** 2) {
      res.unshift(nums[l] ** 2)
      l++
    } else {
      res.unshift(nums[r] ** 2)
      r--
    }
  }
  return res
};