function searchLeft(nums: number[], target: number): number {
  let l = -1,
    r = nums.length;
  while (l + 1 !== r) {
    const pivot = (l + r) >> 1;
    if (nums[pivot] < target) {
      l = pivot;
    } else {
      r = pivot;
    }
  }
  return r;
}
function searchRight(nums: number[], target: number): number {
  let l = -1,
    r = nums.length;
  while (l + 1 !== r) {
    const pivot = (l + r) >> 1;
    if (nums[pivot] <= target) {
      l = pivot;
    } else {
      r = pivot;
    }
  }
  return l;
}
function searchRange(nums: number[], target: number): number[] {
  let res = [-1, -1];
  const left = searchLeft(nums, target);
  const right = searchRight(nums, target);
  if (
    left <= right &&
    right < nums.length &&
    nums[left] === target &&
    nums[right] === target
  ) {
    res = [left,right]
  }
  return res
}
