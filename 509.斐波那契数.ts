const dp = [0, 1]
const map = new Map()

function fib(n: number): number {
  if (n < 2) return dp[n]
  if (map.has(n)) return map.get(n)
  const res = fib(n - 1) + fib(n - 2)
  map.set(n, res)
  return res
};

console.log(fib(4));
