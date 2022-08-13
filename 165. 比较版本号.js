/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const arr1 = version1.split('.')
  const arr2 = version2.split('.')
  while (arr1.length && arr2.length) {
    const item1 = +arr1.shift()
    const item2 = +arr2.shift()
    console.log(item1, item2);
    if (item1 > item2) return 1
    if (item1 < item2) return -1
  }
  console.log(arr1, arr2);
  if (arr1.length) {
    if (!arr1.every(item => item == 0)) return 1
  }
  if (arr2.length) {
    if (!arr2.every(item => item == 0)) return -1
  }
  return 0
};

console.log(compareVersion("1.0.1", '1'));