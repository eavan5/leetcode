function search2(nums: number[], target: number): number {
  let l = -1, r = nums.length;
  while (l + 1 !== r) {
    const mid = l + (r - l >> 1)
    if (nums[mid] < target)
      l = mid
    else
      r = mid
  }
  return nums[r] === target ? r : -1
};

console.log(search2([-1, 0, 3, 5, 9, 12],9));
