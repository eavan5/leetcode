function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let slow = 0,
    fast = 1;
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
}
