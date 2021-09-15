function replaceSpace1(s: string): string {
  return s.split(" ").join("")
};
function replaceSpace2(s: string): string {
  return s.replace(" ", "")
};
function replaceSpace3(s: string): string {
  return encodeURIComponent(s)
};
// unicode
function replaceSpace4(s: string): string {
  let res = ""
  for (let c of s) res += c.charCodeAt(0) === 32 ? '%20' : c
  return res
};

