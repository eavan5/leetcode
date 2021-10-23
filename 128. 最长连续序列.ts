function longestConsecutive(nums: number[]): number {
  let res = 0;
  const set = new Set(nums);
  for (let value of set) {
    if (set.has(value - 1)) continue;
    let count = 1;
    while (set.has(value + 1)) {
      set.delete(value + 1);
      value++;
      count++;
    }
    res = Math.max(res, count);
  }

  return res;
}
