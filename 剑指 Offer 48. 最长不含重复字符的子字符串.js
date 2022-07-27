var lengthOfLongestSubstring = function (s) {
   if (!s) return 0
  let max = 1,p1=0,map = new Map
  for (let p2 = 0; p2 < s.length; p2++){
    const current = s[p2]
    if (map.has(current)) {
      p1 = Math.max(map.get(current)+1,p1)
    }
    map.set(current,p2)
    max = Math.max(max,p2-p1+1)
  }
  return max
};

console.log(lengthOfLongestSubstring('pwwkew'));