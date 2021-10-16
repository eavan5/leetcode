function getLeastNumbers(arr: number[], k: number): number[] {
  return quickSort(arr).slice(0, k);
  function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    const mid = (arr.length / 2) | 0;
    const val = arr.splice(mid, 1)[0];
    const left = [],
      right = [];
    for (const item of arr) {
      if (item < val) {
        left.push(item);
      } else {
        right.push(item);
      }
    }
    return quickSort(left).concat(val, quickSort(right));
  }
}