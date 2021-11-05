function search(nums: number[], target: number): number {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    //通过中点再根据l和r的坐标就可以判断出到底在递增的那一边还是递减的那一边
    const midVal = nums[mid]
    if (midVal === target) return mid
    // 这时候我们要去找递增的地方,顺便看递增的那个区间里面有没有目标值
    if (nums[l] <= midVal) {
      // 这时候左边是递增的
      if (target >= nums[l] && target <= midVal) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      // 这时候右边才是递增
      if (target <= nums[r] && target >= midVal) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }

  }
  return -1
};
console.log(search([5, 1, 3], 3));
