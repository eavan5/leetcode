function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();
  nums.forEach(i => map.set(i, map.has(i) ? map.get(i) + 1 : 1));
  return Array.from(map)
    .sort((a, b) => b[1] - a[1])
    .map(i => i[0])
    .slice(0, k);
}

// ps:这个有更好的写法