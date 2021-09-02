/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

// 递归+二分
// function guessNumber(n: number): number {
//   const recursion = (min: number, max: number) => {
//     const mid = Math.floor((min + max) / 2)
//     const res = guess(mid)
//     if (res === -1) {
//       return recursion(1,mid-1)
//     } else if(res === 1){
//       return recursion(mid+1,max)
//     }else {
//       return mid
//     }
//   }
//   return recursion(1,n)
// };

// 二分

function guessNumber(n: number): number {
  let left = 1, right = n
  while (left < right) {
    const mid = Math.floor(left+(right - left) / 2) //不要使用(left+right )/2  因为加起来可能会超过限制
    if (guess(mid) <= 0) {
      right = mid
    } else {
      left = mid+1
    }
  }
  return right
}
