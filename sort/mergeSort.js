// 归并排序的思想主要是分治。将原始数组划分成较小的数组，直到每个小数组只有一个位置，然后将小数组归并成较大的数组，
// 时间复杂度：O(nlogn)
// 空间复杂度：O(n)

function mergeSort(arr) {
  const len = arr.length;
  if (len === 1) {
    return arr;
  }
  const mid = Math.floor(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, len);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let il = 0;
  let ir = 0;
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }
  while (il < left.length) {
    result.push(left[il++]);
  }
  while (ir < right.length) {
    result.push(right[ir++]);
  }
  return result;
}
