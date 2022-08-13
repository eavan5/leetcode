/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function heapify (arr, i, size) {
    const left = 2 * i + 1,
      right = 2 * i + 2
    let max = i
    if (left < size && arr[left] > arr[max]) {
      max = left
    }
    if (right < size && arr[right] > arr[max]) {
      max = right
    }
    if (max !== i) {
      swap(arr, max, i)
      heapify(arr, max, size)
    }
  }

  function buildMaxHeap (arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
      heapify(arr, i, arr.length)
    }
  }

  function swap (arr, i1, i2) {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
  }


  buildMaxHeap(nums);
  let len = nums.length
  for (var i = nums.length - 1; i > nums.length - 1 - k; i--) {
    swap(nums, 0, i);
    len--;
    heapify(nums, 0, len);
  }
  return nums.at(-k);
};