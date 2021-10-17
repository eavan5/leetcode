function generateParenthesis(n: number): string[] {
  let res: string[] = [];
  if (n <= 0) return res;
  function dfs(path: string, left: number, right: number): void {
    if (right > left || left > n) return;
    if (path.length === 2 * n) {
      res.push(path);
      return;
    }
    dfs(path+"(", left + 1, right);
    dfs(path+")", left, right + 1);
  }
  dfs("", 0, 0);
  return res;
}
