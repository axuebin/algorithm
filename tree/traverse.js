// 树的遍历

// 中序遍历：从最小到最大的顺序访问所有节点
this.inOrderTraverse = function(callback) {
  inOrderTraverse(root, callback);
}

const inOrderTraverse = function(node, callback) {
  if (node !== null) {
    inOrderTraverse(node.left, callback);
    callback(node.key);
    inOrderTraverse(node.right, callback);
  }
}

// 先序遍历：以优先于后代节点的顺序访问每个节点
this.preOrderTraverse = function(callback) {
  preOrderTraverse(root, callback);
}

const preOrderTraverse = function(node, callback) {
  if (node !== null) {
    callback(node.key);
    preOrderTraverse(node.left, callback);
    preOrderTraverse(node.right, callback);
  }
}

// 后序遍历：先访问节点的后戴街店，再访问节点本身
this.postOrderTraverse = function(callback) {
  postOrderTraverse(root, callback);
}

const postOrderTraverse = function(node, callback) {
  if (node !== null) {
    postOrderTraverse(node.left, callback);
    postOrderTraverse(node.right, callback);
    callback(node.key);
  }
}
