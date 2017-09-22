// 选择排序是找到数组中的最小值然后将其放置在第一位，接着第二位第三位。。。
// 时间复杂度：O(n2)
// 空间复杂度：O(1)

function selectionSort(arr) {
  const len = arr.length; // 用len存储数组长度
  let indexMin = 0; // 最小值索引
  let temp = 0;
  for (let i = 0; i < len - 1; i += 1) { //外循环遍历数组
    indexMin = i; // 先假设这一轮循环的第一个值是最小的
    for (let j = i; j < len; j += 1) { // 比较i时候会比它之后的数小，如果小，则令indexMin存储这个更小值的索引
       if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) { // 执行完内循环之后判断当前值i是否是最小的，如果不是，就要交换
      temp = arr[i];
      arr[i] = arr[indexMin];
      arr[indexMin] = temp;
    }
  }
  return arr;
}
