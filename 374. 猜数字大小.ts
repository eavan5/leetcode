/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
  const recursion = (min: number, max: number) => {
    const mid = Math.floor((min + max) / 2)
    const res = guess(mid)
    if (res === -1) {
      return recursion(1,mid-1)
    } else if(res === 1){
      return recursion(mid+1,max)
    }else {
      return mid
    }
  }
  return recursion(1,n)
};
