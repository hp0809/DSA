const { Stack } = require("./stack");
// 6. Create a queue using Singly linked list
// Write a Queue class with its core functions (enqueue(), dequeue()) from scratch.

// Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to the queue.
// Implement a peek() function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.
// Implement a isEmpty() function outside the Queue class that allows you to check if the queue is empty or not
// Implement a display() function outside of the Queue class that lets you display what's in the queue.
// Remove Spock from the queue and display the resulting queue.

class _Node {
  // Creates a node containing the data and a reference to the next item
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function main() {
  const starTrekQ = new Queue();
  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Spock");
  starTrekQ.enqueue("Uhura");
  starTrekQ.enqueue("Sulu");
  starTrekQ.enqueue("Checkov");
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  starTrekQ.enqueue("Kirk");
  console.log(peek(starTrekQ));
  console.log(isEmpty(starTrekQ));
  display(starTrekQ);
  // 1: Uhura
  // 2: Sulu
  // 3: Checkov
  // 4: Kirk
}

main();

function peek(queue) {
  if (queue.first == null) {
    return "queue is empty";
  } else {
    return queue.first;
  }
}

function isEmpty(queue) {
  if (queue.first == null && queue.last == null) {
    return "queue is empty";
  } else {
    return "queue is not empty";
  }
}

function display(queue) {
  let node = queue.first;
  let order = 1;
  while (node !== null) {
    console.log(`${order}: ${node.value}`);
    order++;
    node = node.next;
  }
}

// 7. Create a queue class using Doubly linked List
// Use the items listed in #6 and enqueue them to your queue.

// Check to see who is first one on the Queue?
class _DLLNode {
  // Creates a node containing the data and a reference to the next item
  constructor(value) {
    (this.value = value), (this.next = null), (this.previous = null);
  }
}

class DLLQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
      node.previous = this.last;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (this.first !== null) {
      this.first.previous = null;
    }

    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function mainDLL() {
  const starTrekDLL = new DLLQueue();

  starTrekDLL.enqueue("Kirk");
  starTrekDLL.enqueue("Spock");
  starTrekDLL.enqueue("Uhura");
  starTrekDLL.enqueue("Sulu");
  starTrekDLL.enqueue("Checkov");
  display(starTrekDLL);
  // 1: Kirk
  // 2: Spock
  // 3: Uhura
  // 4: Sulu
  // 5: Checkov
}

mainDLL();

// 8. Queue implementation using a stack
// Keeping the concept of a queue in mind, implement a queue using 2 stacks and no other data structure.
// (You are not allowed to use a doubly linked list or array. Use your stack implementation with a linked list from above to solve this problem.)

const firstStack = new Stack();
const lastStack = new Stack();

//TODO: needs refactoring - returns undefined
// class QueueofStacks {
//   constructor() {
//     this.first = firstStack;
//     this.last = lastStack;
//   }
//   enqueue(data) {
//     if (this.first.top) {
//       while (this.first.top) {
//         this.last.push(this.first.pop());
//       }
//     }
//     this.last.push(data);
//     while (this.last.top) {
//       this.first.push(this.last.pop());
//     }
//   }
//   dequeue() {
//     return this.first.pop();
//   }
// }

function mainQofS() {
  const starQ = new QueueofStacks();

  starQ.enqueue("Kirk");
  starQ.enqueue("Spock");
  display(starQ);
}

// mainQofS();

// 9. Square dance pairing
// As people come to the dance floor, they should be paired off as quickly as possible: 
// man with woman, man with woman, all the way down the line. 
// If several men arrive in a row, they should be paired in the order they came, and likewise if several women do. 
// Maintain a queue of "spares" (men for whom you have no women yet, or vice versa), and pair them as appropriate.

// F Jane

// M Frank

// M John

// M Sherlock

// F Madonna

// M David

// M Christopher

// F Beyonce

// Female dancer is Jane, and the male dancer is Frank
// Female dancer is Madonna, and the male dancer is John
// Female dancer is Beyonce, and the male dancer is Sherlock
// There are 2 male dancers waiting to dance

// 10. The Ophidian Bank
// At the Ophidian Bank, a single teller serves a long queue of people. 
// New customers join the end of the queue, and the teller will serve a customer only if they have all of the appropriate paperwork. 
// Write a representation of this queue; 25% of the time (random), a customer's paperwork isn't quite right, and it's back to the end of the queue. 
// Show what a few minutes of the bank's lobby would look like.