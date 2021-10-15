function removeDuplicates(s: string): string {
  const stack:string[] = [];
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (stack[stack.length - 1] === current) {
      stack.pop()
    } else {
      stack.push(current);
    }
  }
  return stack.join('');
};