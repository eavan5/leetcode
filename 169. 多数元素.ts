// function majorityElement(nums: number[]): number {
//   if (nums.length === 1) return nums[0]
//   const map = new Map();
//   const target = nums.length / 2
//   for (let i = 0; i < nums.length; i++) {
//     if (!map.has(nums[i])) {
//       map.set(nums[i], 1)
//     } else {
//       const res = map.get(nums[i]) + 1
//       if (res > target) return nums[i]
//       map.set(nums[i], res)
//     }
//   }
//   return 0
// };


function majorityElement(nums: number[]): number {
  let i = 0, j = 0
  for (const item of nums) {
    if (!j) i = item
    j += i === item ? 1 : -1
  }
  return i
};