function decodeString(s: string): string {
  let res = "",
    multiple = 0;
  const resStack = [],
    mulStack = [];
  for (const char of s) {
    if (!isNaN(+char)) {
      //数字 因为那个数字有可能是21 这种
      multiple = multiple * 10 + +char;
    } else if (char === "[") {
      resStack.push(res);
      mulStack.push(multiple);
      res = "";
      multiple = 0;
    } else if (char === "]") {
      res = resStack.pop() + res.repeat(mulStack.pop() as number);
    } else {
      res += char;
    }
  }
  return res;
}

console.log(decodeString("1[a6[b]c]"));
