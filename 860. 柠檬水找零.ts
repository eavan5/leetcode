function lemonadeChange(bills: number[]): boolean {
  let five = 0,
    ten = 0;
  for (let i = 0; i < bills.length; i++) {
    const current = bills[i];
    if (current === 5) {
      five++;
    } else if (current === 10) {
      if (five === 0) {
        return false;
      }
      five--;
      ten++;
    } else {
      if (ten > 0 && five > 0) {
        ten--;
        five--;
      } else if (five > 2) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
}
