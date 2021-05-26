# LRU缓存

// 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。  
// 实现 LRUCache 类：  

// LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存  
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。  
// void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，  
// 则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。  

// 进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？  

// 示例：  

// 输入  
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]  
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]  
// 输出  
// [null, null, null, 1, null, -1, null, -1, 3, 4]  

// 解释  
// LRUCache lRUCache = new LRUCache(2);  
// lRUCache.put(1, 1); // 缓存是 {1=1}  
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}  
// lRUCache.get(1);    // 返回 1  
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}  
// lRUCache.get(2);    // 返回 -1 (未找到)  
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}  
// lRUCache.get(1);    // 返回 -1 (未找到)  
// lRUCache.get(3);    // 返回 3  
// lRUCache.get(4);    // 返回 4  

// 新数据插入到链表头部；  
// 每当缓存命中（即缓存数据被访问），则将数据移到链表头部；  
// 当链表满的时候，将链表尾部的数据丢弃。  
// 来源：力扣（LeetCode）  

``` js
  // 节点
  class ListNode {
    constructor(key, value) {
      this.key = key
      this.value = value
      this.next = null
      this.prev = null
    }
  }
  // 双向列表
  class LRUCache {
    constructor(capacity) {
      this.head = new ListNode()
      this.tail = new ListNode()
      this.head.next = this.tail
      this.tail.prev = this.head

      this.capacity = capacity
      this.obj = {}
    }

    // 添加第一个节点
    addFirstNode(node) {
      const { key, value } = node
      const tempNextNode = this.head.next // 缓存头部后面第一个节点
      const newNode = new ListNode(key, value) // 新增的节点
      // next 链
      this.head.next = newNode
      newNode.next = tempNextNode

      // prev 链
      tempNextNode.prev = newNode
      newNode.prev = this.head
      return newNode
    }

    removeNode(node) {
      const nodePrev = node.prev
      const nodeNext = node.next
      nodePrev.next = nodeNext
      nodeNext.prev = nodePrev

      node.prev = null
      node.next = null
    }

    put(key, value) {
      if (key in this.obj) {
        const node = this.obj[key]
        this.removeNode(node)
        node.value = value
        const newNode = this.addFirstNode(node)
        this.obj[key] = newNode
        return
      }

      if (Object.keys(this.obj).length >= this.capacity) {
        const node = this.tail.prev
        this.removeNode(node)
        delete this.obj[node.key]
      }

      const node = new ListNode(key, value) // 新增的节点
      const newNode = this.addFirstNode(node)
      this.obj[key] = newNode
    }

    get(key) {
      const node = this.obj[key]
      if (node) {
        this.removeNode(node)
        const newNode = this.addFirstNode(node)
        this.obj[node.key] = newNode
        return node.value
      } else {
        return -1
      }
    }
  }

  const lRUCache = new LRUCache(2)
  lRUCache.put(2, 1)
  lRUCache.put(2, 2)
  lRUCache.get(2)
  lRUCache.put(1, 1)
  lRUCache.put(4, 1)
  lRUCache.get(2)
```