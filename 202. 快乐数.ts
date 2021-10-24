function isHappy(n: number): boolean {
  const set = new Set();
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = getN(n);
  }
  return n === 1;

  function getN(n: number): number {
    if(n===0||n===1) return n
    let res = 0;
    while (n) {
      res += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    return res;
  }
}
