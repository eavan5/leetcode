function rob(nums: number[]): number {
  const temp = [0,nums[0]]
  for (let i = 2; i <= nums.length; i++) {
    temp[i] = Math.max(temp[i-2]+nums[i-1],temp[i-1])
  }
  return temp[nums.length]
};

console.log(rob([1,2,3,1]));
