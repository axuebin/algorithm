// 顺序查找（线性查找）就是将每一个数据结构中的元素和我们要找的元素做比较。
// 就很类似JavaScript中数组的indexOf方法。
// 时间复杂度：O(n)

function sequentialSearch(array,item){
  for (let i = 0; i < array.length; i += 1) {
    if ( item === array[i] ) {
      return i;
    }
  }
  return -1;
}
