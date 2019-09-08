class _Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAfter(item, key) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === key) {
      this.head.next = new _Node(item, this.head.next);
      return;
    }

    let node = this.head.next;
    while (node !== null && node.value !== key) {
      node = node.next;
    }
    if (node === null) {
      console.log(`${key} not found`);
      return;
    }
    node.next = new _Node(item, node.next);
  }

  insertAt(item, index) {
    if (index === 0) {
      this.insertFirst(item);
    } else {
      let counter = 1;
      let currentNode = this.head.next,
        previousNode = this.head;

      while (currentNode !== null && counter !== index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        counter++;
      }
      if (currentNode === null) {
        console.log("Please choose another index");
        return;
      }
      previousNode.next = new _Node(item, currentNode);
    }
  }

  insertBefore(item, key) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === key) {
      this.head = new _Node(item, this.head);
      return;
    }

    let currentNode = this.head.next,
      previousNode = this.head;
    while (currentNode !== null && currentNode.value !== key) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log(`${key} not found`);
      return;
    }
    previousNode.next = new _Node(item, currentNode);
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
               and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

function size(list) {
  //if list length is 0 return 0
  if (!list.head) {
    return 0;
  }
  //if head exists, counter is set to one and none is the next node
  let node = list.head.next;
  let counter = 1;

  //go through all nodes, incrementing the counter at each node
  while (node !== null) {
    counter++;
    node = node.next;
  }
  return counter;
}

function isEmpty(list) {
  //if there are no items in list, return true
  if (!list.head) {
    return true;
  }
  return false;
}

function findPrevious(list, item) {
  //if the list is empty or if the value were're trying to match is at the head node, return null
  if (isEmpty(list) || list.head.value === item) {
    return null;
  }

  let currentNode = list.head,
    previousNode = list.head;
  //go through all the nodes until we find the node with desired value
  while (currentNode !== null && currentNode.value !== item) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  //if we go through all nodes without finding the value, log that...
  if (currentNode === null) {
    console.log(`${item} not found`);
    return;
  }
  //once currentnode's value matches value we're searching for, return the previous node
  return previousNode;
}

function findLast(list) {
  if (!list.head) {
    return null;
  }

  let node = list.head;
  //go through all the nodes until we get to the node that point's to null, this is the last node, so return it
  while (node.next !== null) {
    node = node.next;
  }
  return node;
}

function display(list) {
  if (!list.head) {
    return null;
  }

  let arrayList = [];
  let node = list.head;
  //go through nodes, pushing each into an array
  while (node !== null) {
    arrayList.push(node);
    node = node.next;
  }
  //display the array of nodes!
  console.log(arrayList);
}

// 2. Creating a singly linked list
// Write a function main.
// Within the function, using the linked list class above, create a linked list with the name SLL and add the following items to your linked list:
// Apollo, Boomer, Helo, Husker, Starbuck.
function main() {
  const SSL = new LinkedList();
  SSL.insertFirst("Apollo");
  SSL.insertFirst("Boomer");
  SSL.insertFirst("Helo");
  SSL.insertFirst("Husker");
  SSL.insertFirst("Starbuck");
  // Add Tauhida to the list.
  SSL.insertFirst("Tauhida");
  // Remove squirrel from the list.(there is no squirrel in list)
  SSL.remove("squirrel");
  SSL.insertBefore("Athena", "Boomer");
  SSL.insertAfter("Hotdog", "Helo");
  SSL.insertAt("Kat", 3);
  SSL.remove("Tauhida");
  display(SSL);
  reverseList(SSL);
  display(SSL);
}

main();
// Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
// Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
// Implement a function called insertAt() that inserts an item at a specific position in the linked list.

// Add Athena before Boomer using your insertBefore() function.

// Add Hotdog after Helo using the insertAfter() method.

// Using the insertAt() method insert Kat in the 3rd position of the list.

// Remove Tauhida from the list.

function reverseList(list) {
  //if list is empty return null
  if (!list.head) {
    return null;
  }

  let currentNode = list.head,
    previousNode = null,
    tempNode;

  //go through nodes, set tempnode to next node
  //set next node pointer to the previous node
  // set the previous node to the node we're on
  //set the node we're on to the tempnode(which is the next node...)
  while (currentNode.next) {
    tempNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = tempNode;
  }
  //when we get to the end of the list, make the node we're on the head, and set the pointer to the previous node
  if (!currentNode.next) {
    list.head = currentNode;
    list.head.next = previousNode;
  }
  return list;
}

function thirdFromTheEnd(list) {
  //if there are three or less nodes in the list, return null
  if (!list.head || !list.head.next || !list.head.next.next) {
    return null;
  }

  let node = list.head;
  //move through the nodes as long as there are three more nodes in list, when there are less than three, return the current node
  while (node.next.next.next) {
    node = node.next;
  }
  return node;
}

function middleOfList(list) {
  if (!list.head) {
    return null;
  }

  //get size of list, divide in two, round down
  const middleIndex = Math.floor(size(list) / 2);

  //set counter to zero, start at head
  let counter = 0;
  let node = list.head;

  //move through nodes until counter is equal to middleIndex, incrementing counter with each node
  while (counter !== middleIndex) {
    node = node.next;
    counter++;
  }
  return node;
}

function cycleList(list) {
  if (!list.head) {
    return null;
  }

  //create empty array
  const visited = [];
  let node = list.head;

  //move through nodes, pushing each one into visited array, check each node to see if it is already is in the array
  while (node && !visited.includes(node)) {
    visited.push(node);
    node = node.next;
  }
  //if we reach end of the list without finding a match in our visited array, return false, the list is not a cycle
  if (!node) {
    return false;
  }
  //if node is already in array, return true(the list is a cycle)
  return true;
}