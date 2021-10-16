function addStrings(num1: string, num2: string): string {
  while (num1.length > num2.length) num2 = "0" + num2;
  while (num2.length > num1.length) num1 = "0" + num1;
  let res = "",
    temp = 0;
  for (let i = num2.length - 1; i >= 0; i--) {
    const sum = +num2[i] + +num1[i] + temp;
    res = String(sum % 10) + res;
    temp = sum > 9 ? 1 : 0;
  }
  return temp === 1 ? "1" + res : res;
}
