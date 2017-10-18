// 二分查找的步骤：
// 要求数组先排序
// 1. 选择数组中的中间值
// 2. 如果刚好选中，恭喜你，直接返回
// 3. 如果待搜索值比选中值要小，则返回步骤一在左边的字数组中寻找
// 4. 如果待搜索值比选中值要大，则返回步骤一在右边的字数组中寻找
// 时间复杂度：O(logn)

function binarySearch(array, item) {
  const sortArray = quickSort(array);
  let low = 0;
  let high = sortArray.length - 1;
  let mid = 0;
  let element = 0;
  while (low < high) {
    mid = Math.floor((low + high) / 2);
    element = sortArray[mid];
    if (element < item) {
      low = mid + 1;
    } else if (element > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
