function minWindow(s: string, t: string): string {
  let l = 0,
    r = 0,
    res = ""
  const map = new Map()
  for (const i of t) {
    map.set(i, map.has(i) ? map.get(i) + 1 : 1)
  }
  let needCount = map.size
  while (r < s.length) {
    const i1 = s[r]
    if (map.has(i1)) {
      map.set(i1, map.get(i1) - 1)
      if(!map.get(i1)) needCount--
    }
    while (!needCount) {
      const current = s.substring(l, r + 1)
      res = (current.length < res.length || !res) ? current : res
      const i2 = s[l]
      if (map.has(i2)) {
        map.set(i2, map.get(i2) + 1)
        if (map.get(i2) === 1) needCount++
      }
      l++
    }
    r++
  }
  return res
};

//这个不对的
// function minWindow(s: string, t: string): string {
//   let l = 0,
//     r = 0,
//     res = ""
//   const map = new Map()
//   for (const i of t) {
//     map.set(i,map.has(i)?(map.get(i)+1):1)
//   }
//   let needCount = map.size
//   while (r < s.length) {
//     const i1 = s[r]
//     map.has(i1) && (map.set(i1, map.get(i1) - 1) && (!map.get(i1) && needCount--))
//     while (!needCount) {
//       const current = s.substring(l, r + 1)
//       res = (current.length<res.length || !res)?current:res
//       const i2 = s[l]
//       if(map.has(c2))
//       l++
//     }
//     r++
//   }
//   return res
// };

console.log(minWindow("aa", 'aa'));
