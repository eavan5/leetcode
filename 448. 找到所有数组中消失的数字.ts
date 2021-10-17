function findDisappearedNumbers(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    const number = Math.abs(nums[i]);
    if (nums[number - 1] > 0) {
      nums[number - 1] = -nums[number - 1];
    }
  }
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (number > 0) {
      res.push(i + 1);
    }
  }

  return res;
}
