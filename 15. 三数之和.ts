function threeSum(nums: number[]): number[][] {
  if(nums.length<3) return []
  let res: number[][] = []
  nums.sort((a,b)=>a-b)
  for (let i = 0; i < nums.length-2; i++) {
    // console.log(i);
    const current = nums[i]
    if(current === nums[i-1]) continue
    let start = i + 1
    let end = nums.length - 1
    while (start < end) {
      const sum = current + nums[start] + nums[end]
      if (!sum) {
        res.push([current, nums[start++], nums[end--]])
        while ( nums[start]===nums[start-1]) {
          start++
        }
        while ( nums[end]===nums[end+1]) {
          end--
        }
        
      } else if (sum < 0) {
        start++
      } else {
        end--
      }
    }
    
  }
  return res
};
console.log(threeSum([-2,0,1,1,2]));
