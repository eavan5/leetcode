function fib(n: number): number {
  if(n<=1) return n
  let l = 0, m = 0, r = 1
  for (let j = 2; j <= n; j++){
    l = m 
    m = r
    r = l+m
  }
  return r
};
