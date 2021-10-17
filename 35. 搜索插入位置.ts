function searchInsert(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let pivot = l + ((r - l) >> 1);
    if (nums[pivot] > target) {
      r = pivot - 1;
    } else if (nums[pivot] < target) {
      l = pivot + 1;
    } else {
      return pivot;
    }
  }
  return l
}
