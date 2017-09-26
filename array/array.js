// 创建数组
//new Array()构造函数，如果传进一个参数则这个参数表示数组的长度
const arr = new Array(3); // [undefined,undefined,undefined]
const arr = new Array(1, 2, 3); // [1,2,3]

// 字面量的方式会更加简洁
const arr = [1, 2, 3]; // [1,2,3]

// ES6的Array.of()，如果传进一个参数就是表示只有这一个参数的数组
const arr = Array.of(3); // [3]
const arr = Array.of(1, 2, 3); // [1,2,3]


// 模拟栈（先进后出）
const arr = [1, 2, 3, 4];
// 入栈
arr.push(5);
// 出栈
arr.pop();

// 模拟队列（先进先出）
const arr = [1, 2, 3, 4];
// 进队列
arr.push(5);
// 出队列
arr.shift();


// 排序
// 从小到大
function arrSort(arr){
  return arr.sort((a,b)=>a-b)
}
// 从大到小
function arrSort(arr){
  return arr.sort((a,b)=>b-a)
}

// 去重
// 利用indexOf判断
function unique(arr){
  let newArr=[];
  for(let i=0;i<arr.length;i++){
    if(newArr.indexOf(arr[i])===-1){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 利用hash
function unique(arr){
  let newArr=[];
  let hash={};
  for(let i=0;i<arr.length;i++){
    if(hash[arr[i]]===undefined){
      hash[arr[i]]=true;
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 利用排序
function unique(arr){
  let sortArr=arr.sort();
  let newArr=[arr[0]];
  for(let i=1;i<arr.length;i++){
    if(arr[i]!==arr[i-1]){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 利用Set：
function unique(arr){
  return Array.from(new Set(arr))
}

function unique(arr){
  return [...new Set(arr)]
}

// 利用filter:
const exists = {};
[1,2,3,1,'a',1,'a'].filter(item => {
  if (exists[item]) return false
  exists[item] = true
  return true
})
[1,2,3,1,'a',1,'a'].filter(function(ele,index,array){
    return index === array.indexOf(ele)
})
