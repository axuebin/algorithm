// 冒泡排序就是比较任何两个相邻的项，如果第一个比第二个大，则交换它们。
// 时间复杂度：O(n2)
// 空间复杂度：O(1)

function bubbleSort(arr) {
  const len = arr.length; // 声明一个len来存储数组的长度
  let temp = 0;
  for (let i = 0; i < len; i += 1) { // 外循环遍历数组
    for (let j = i + 1; j < len - 1; j += 1) { // 内循环执行当前项和下一项进行比较
      if (arr[j] > arr[j + 1]) {  // 如果当前项比下一项大，则交换它们
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 第二次循环时，i前面的数其实已经排好序了，就不要再次比较了，可以在内循环中减去已经跑过的轮数，就可以避免不必要的比较
function bubbleSort(arr) {
  const len = arr.length;
  let temp = 0;
  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len - 1 - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
