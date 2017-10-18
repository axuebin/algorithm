// 二叉查找树：只允许左侧节点小于父节点，右侧节点大于父节点

function BinarySearchTree() {
  // 声明一个Node表示树中的每个节点
  const Node = function(key) {
    this.key = key; // 节点本身
    this.left = null; // 左子节点
    this.right = null; // 右子节点
  };
  let root = null;
}

// 向树中插入一个键
this.insert = function(key) {
  // 创建用来表示新节点的Node类实例
  const newNode = new Node(key);
  if (root === null) {
    // 根节点指向新节点
    root = newNode;
  } else {
    // 插入节点
    insertNode(root, newNode);
  }
}

const insertNode = function(node, newNode) {
  // 新节点落在节点的左侧
  if (newNode.key < node.key) {
    if (node.left === null) {
      // 如果该节点左侧没有子节点，则插入
      node.left = newNode;
    } else {
      // 如果该节点左侧已经有子节点，就继续找下一层
      insertNode(node.left, newNode);
    }
  } else {
    // 新节点落在节点的右侧
    if (node.right === null) {
      // 如果该节点右侧没有子节点，则插入
      node.right = newNode;
    } else {
      // 如果该节点右侧已经有子节点，就继续找下一层
      insertNode(node.right, newNode);
    }
  }
}
