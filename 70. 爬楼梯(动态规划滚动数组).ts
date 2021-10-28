function climbStairs(n: number): number {
  let l = 0,
    m = 0,
    r = 1;
  for (let i = 1; i <= n; i++) {
    l = m;
    m = r;
    r = l + m;
  }
  return r;
}
