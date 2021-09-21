function maxArea(height: number[]): number {
  let l = 0, r = height.length - 1
  let max = 0
  while (l < r) {
    const rectWidth = r - l
    const rectHeight = Math.min(height[l], height[r])
    max = Math.max(max, rectWidth * rectHeight)
    height[l] > height[r] ? r-- : l++
  }
  return max
};