function mySqrt(x: number): number {
  let l = 0,
    r = x
  while (l <= r) {
    const mid = l + ((r - l) >>> 1)
    if (mid ** 2<=x) {
      l = mid+1
    } else {
      r= mid-1
    }
  }
  return r
};


console.log(mySqrt(9));
