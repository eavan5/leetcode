/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  // 配对阶段
  let a = nums[0],b = nums[0],countA=0,countB=0
  for (const item of nums) {
    if (item === a){
      countA++
      continue
    }
    if (item === b){
      countB++
      continue
    }
    if(countA===0){
      a = item
      countA++
      continue
    }
    if(countB===0){
      b = item
      countB++
      continue
    }
    countA--
    countB--
  }

  if(a===b) return [a]

  //记数阶段
  let resCountA = 0,resCountB = 0
  for(const item of nums){
    if(item===a){
      resCountA++
    }
    if(item===b){
      resCountB++
    }
  }
  const res = []
  if(resCountA>(nums.length/3)) res.push(a)
  if(resCountB>(nums.length/3)) res.push(b)
  return res
};