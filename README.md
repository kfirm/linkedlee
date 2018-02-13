# linkedlee

JavaScript implementation of a Linked List with extra power

# Installation 

Simply reference qulee.js or qulee.min.js on your html page

```
<script src="linkedlee.min.js"></script>
```

Using it on node.js:

```
npm install linkedlee --save
```

# Usage

Linkedlee provides an implementation of a linked list which can be used both in NodeJS applications and on your web application.   

# API

**linkedList.push(item)** - add an item.  
**linkedList.pushTop(item)** - add an item to the top of the linked list (as the first item)    
**linkedList.pushAt(index,item)** - replace the content of a a node by node index.     
**linkedList.get(index)** - returns the node in the given index.  
**linkedList.remove(index)** - removes the node in the given index.    
**linkedList.size()** - return the linked list size.   
**linkedList.down(index)** - moved the node in the given index down the linked list chain by one.    
**linkedList.up(index)** - moved the node in the given index up the linked list chain by one.                              
**linkedList.loop()** - makes the linked list as a circular linked list - which means that the next() of the last 
                        node points to the first node and vice versa                                                     
**linkedList.unloop()** - removes the circularity of the list. the opposite of the "loop()" function                                  
**linkedList.reverse()** - reverse the linked list                                  
**linkedList.clear()** - remove all nodes
                                  

# Node (Each element in the list) API

**node.next()** - get next node  
**node.prev()** - get previous node  
**node.value()** - get node's value/data  
**node.remove()** - removed the node from the list  
 
# Examples

Simple example:
```
var LinkedList = require('linkedlee');

linkedList = new LinkedList(*maxSize*); // maxSize is optinal, if not given there is no limit 

linkedList.push('a');
linkedList.push('b');
linkedList.push('c');

var node = linkedList.get(0); 
do {
    console.log(node.value());
    node = node.next();
} while (node)
// will output: a c b

```