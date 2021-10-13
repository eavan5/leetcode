function lengthOfLastWord(s: string): number {
  let len = s.length;
  let res = 0;
  while (len) {
    if (s[--len] === " ") {
      if (res === 0) continue;
      break;
    }
    res++;
  }
  return res;
}

console.log(lengthOfLastWord("Hello World "));
