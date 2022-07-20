/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
  let [l,r] = [0,arr.length]
  while (l < r) {
    while(arr[l]===arr[r-1] && r-1>l) r--;//首先去除最右边的重复元素
    let mid = l + ((r - l) >> 1)
    if (arr[mid] === target) {
      while(arr[mid-1]===target && mid>0) mid--; //首先去除左边的重复元素
      return mid
    }
    if(arr[mid]>=arr[l]){ // 左边是递增
      if(target>=arr[l]&&target<=arr[mid]){
        r = mid
      }else{
        l = mid+1
      }
    } else {
      if (target > arr[mid] && target <= arr[r-1]) {
        l = mid+1
      }else{
        r = mid
      }
    }
  }
  return -1
};

console.log(search([12, 20, -21, -21, -19, -14, -11, -8, -8, -8, -6, -6, -4, -4, 0, 1, 5, 5, 6, 11, 11, 12],
-8));