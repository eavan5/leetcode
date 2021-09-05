function partition(s: string): string[][] {
  let res:string[][] = []
  function dfs(start: number, temp: string[]) {
    if (start === s.length) {
      res.push(temp.slice()) //push的时候做个浅拷贝
      return
    }
    for (let i = start; i < s.length; i++) {
      if (isPalindrome(start, i)) {
        temp.push(s.slice(start, i + 1))
        dfs(i + 1, temp)
        temp.pop() //回溯
      }
      
    }
  }
  //判断s是否是回文
  function isPalindrome(left:number,right:number) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false
      }
      left++
      right--
    }
    return true
  }
  dfs(0,[])
  return res
};