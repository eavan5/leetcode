function largestRectangleArea(heights: number[]): number {
  let max = 0;
  const length = heights.length;
  for (let i = 0; i < length; i++) {
    let l = i,
      r = i;
    const currentHeight = heights[i];
    while (l >= 0 && heights[l] >= currentHeight) {
      l--;
    }
    while (r < length && heights[r] >= currentHeight) {
      r++;
    }
    max = Math.max(max, currentHeight * (r - l - 1));
  }
  return max;
}


// 暴力通过不了