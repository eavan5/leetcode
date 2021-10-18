function addBinary(a: string, b: string): string {
    a = '0b' + a ;
    b = '0b' + b ;
  const sum = BigInt(a) + BigInt(b);
    return sum.toString(2);
}