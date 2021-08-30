function lengthOfLongestSubstring(s: string): number {
  let left = 0
  let max = 0
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (map.has(current)&&map.get(current)>=left) {
      left = map.get(current)+1
    }
    max = Math.max(max,i-left+1)
    map.set(current,i)
  }
  return max
};