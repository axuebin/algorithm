// 定义一个节点
class Node {
    constructor(data, next = null) {
        this.data = data; // 当前节点元素
        this.next = next; // 下一个节点链接
    }
}


// 定义链表
class LinkedList {
    constructor() {
        this.head = null; // 链表的head指针
    }
    // 链表头部插入
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    // 链表尾部插入
    insertAtEnd(data) {
        const newNode = new Node(data);
        // 如果是空链表
        if (!this.head) {
            this.head = newNode;
            return this.head;
        }
        let tail = this.head;
        // 否则找 next 为空的节点（尾结点）
        while(tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
        return this.head;
    }
    // 查找第 index 个节点
    getAt(index) {
        let counter = 0;
        let node = this.head;
        // 遍历找第 index 个节点
        while(node) {
            if (counter === index) {
                return node;
            }
            counter += 1;
            node = node.next;
        }
        return null;
    }
    // 在第 index 个节点的位置插入一个节点
    insertAt(data, index) {
        // 如果是空链表
        if(!this.head) {
            this.head = new Node(data);
            return;
        }
        // 如果 index 是 0，相当于插入一个头结点
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        // 否则找到第 index - 1 个节点
        const pre = this.getAt(index - 1);
        const newNode = new Node(data);
        newNode.next = pre.next;
        pre.next = newNode;
        return this.head;
    }
    // 删除头结点
    deleteFirstNode() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
        return this.head;
    }
    // 删除尾结点
    deleteLastNode() {
        if (!this.head) {
            return;
        }
        // 如果只有一个节点
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let pre = this.head;
        let tail = this.head.next;
        while(tail.next !== null) {
            pre = tail;
            tail = tail.next;
        }
        pre.next = null;
        return this.head;
    }
    // 删除第 index 个节点
    deleteAt(index) {
        if (!this.head) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const pre = this.getAt(index - 1);
        if (!pre || pre.next) {
            return;
        }
        pre.next = pre.next.next;
        return this.head;
    }
    // 删除链表
    deleteList() {
        this.head = null;
    }
}