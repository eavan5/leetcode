function canJump(nums: number[]): boolean {
  let end = nums.length - 1
  for (let i = end - 1; i >= 0; i--) {
    if (nums[i] >= end - i) {
      end = i
    }
  }
  return end === 0
}