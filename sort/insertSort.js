// 插入排序就是每次将一个元素与已排序的元素进行逐一比较，直到找到合适的位置按大小插入。
// 时间复杂度：O(n2)
// 空间复杂度：O(1)

function insertionSort(arr) {
  const len = arr.length; // 数组长度
  let j = 0; // 使用的辅助变量
  let temp = 0;
  for (let i = 1; i < len; i++) { // 外循环，从1开始
    j = i; // 当前索引赋给j
    temp = arr[i]; // 当前值存在temp
    while (j > 0 && arr[j - 1] > temp) { // 如果j前面的数比它大，就往前移，直到第一位
      arry[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp; // temp是要排序的那个数，放到正确的j的位置上
  }
  return arr;
}
