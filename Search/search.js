class _Node {
    constructor(value) {
        this.value=value;
        this.next=null;
    }
}

function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1
}

function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if(start > end) {
        return -1;
    }

    const index = Math.floor((start + end)/2);
    const item = array[index];

    console.log(start, end);

    if(item == value) {
        return index;
    } else if (item < value) {
        return binarySearch(array, value, index +1, end);
    } else if (item > value) {
        return binarySearch(array, value, start, index -1, end);
    }
}

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    dfs(values=[]) {
        if(this.left) {
            values = this.left.dfs(values);
        }
        values.push(this.value);

        if(this.right) {
            values = this.right.dfs(values);
        }
        return values;
    }

    bfs(tree, values =[]) {
        const queue = new Queue();
        const node = tree.root;
        queue.enqueue(node);
        while (queue.length) {
            const node = queue.dequeue();
            values.push(node.value);

            if(node.left) {
                queue.enqueue(node.left);
            }
            if(node.right) {
                queue.enqueue(node.right);
            }
        }

        return values
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


// 1. How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and are using the recursive binary search algorithm.
// Identify the sequence of numbers that each recursive call will search to find 8.

//start - 0 - end- 10
//index - 5
//initial item = 11
//binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8, 0, 4) <-- searching first half of array
//item == value!

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and are using the recursive binary search algorithm.
// Identify the sequence of numbers that each recursive call will search to find 16?

//binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16, 0, 10) <-- searching entire array
// then binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16, 6, 10) <--searching array[6] to array[10] (second half of array)
//start - 6, end - 10, index 8, items value = 15
//15<16 so then
//then //binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16, 9, 10) <--searching array[9] to array[10]
//
//start - 9, end - 10, index - 9, value - 17

function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;
  
    if (start > end) {
      return -1;
    }
  
    const index = Math.floor((start + end) / 2);
    const item = array[index];
  
    console.log(start, end);
    if (item == value) {
      return index;
    } else if (item < value) {
      //recursion!
      return binarySearch(array, value, index + 1, end);
    } else if (item > value) {
      return binarySearch(array, value, start, index - 1);
    }
  }
  
  // 1) Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and
  //  35 25 15 14 19 27 89 79 91 90.
  // What would be its postorder traversal?
  //  14, 19, 15, 27, 25, 79, 90, 91, 89, 35
  
  // 2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?
  //8, 6, 5, 7, 10, 9, 11
  
  // 5. Implement different tree traversals
  // create a binary search tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22.
  // Then implement inOrder(), preOrder(), and postOrder() functions.
  
  // A pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
  
  // In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
  
  // Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25
  function main() {
    // initialize binary search tree
    const bst = new BinarySearchTree();
  
    // insert data
    let data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
    data.forEach(int => bst.insert(int, int));
  
    console.log("Pre Order: " + bst.preOrder());
    console.log("In Order: " + bst.inOrder());
    console.log("Post Order: " + bst.postOrder());
  }
  
  main();
  
  // 6. Find the next commanding officer
  // Suppose you have a tree representing a command structure of the Starship USS Enterprise.
  //
  //    Captain Picard
  //  /                \
  // Commander Riker       Commander Data
  //   /         \               \
  //  Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
  //  Worf        LaForge            Crusher
  //    /                           /
  // Lieutenant                  Lieutenant
  // security-officer            Selar
  // This tree is meant to represent who is in charge of lower-ranking officers.
  //  For example, Commander Riker is directly responsible for Worf and LaForge.
  // People of the same rank are at the same level in the tree.
  // However, to distinguish between people of the same rank, those with more experience are on the left and those with less on the right
  // (i.e., experience decreases from left to right).
  // Suppose a fierce battle with an enemy ensues.
  // Write a program that will take this tree of commanding officers and outlines the ranking officers in their ranking order
  //  so that if officers start dropping like flies, we know who is the next person to take over command.
  
  function command() {
    let uss = new BinarySearchTree();
  
    let officers = [
      { key: 1, name: "Cpt. Picard" },
      { key: 2, name: "Cmdr. Riker" },
      { key: 3, name: "Lt. Cmdr. Worf" },
      { key: 4, name: "Lt. Cmdr. LaForge" },
      { key: 5, name: "Lt. sec-officer" },
      { key: 6, name: "Cmdr. Data" },
      { key: 7, name: "Lt. Cmdr. Crusher" },
      { key: 8, name: "Lt. Selar" }
    ];
    officers.forEach(officer => {
      uss.insert(officer.key, officer.name);
    });
  
    console.log(orderOfCommand(uss));
  }
  
  function orderOfCommand(bst) {
    if (!bst.value) {
      return [];
    }
  
    const queue = new Queue();
    queue.enqueue(bst);
  
    let order = [];
  
    while (queue.first) {
      let node = queue.dequeue();
      order.push(node.value);
  
      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
    }
    return order;
  }
  
  command();
  
  // 7. Max profit
  // The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105].
  // If you had to buy shares in the company on a particular day, and sell the shares on a following day,
  //  write an algorithm to work out what the maximum profit you could make would be.
  
  function maxProfit(arr) {
    //being by getting diff between first and second items in array
    let maximumProfit = 0;
    let bestDay = 0;
  
    //loop through the remaining items in array, comparing profit to the maximumProfit, and replacing it if it is greater and set bestDay
    for (let i = 1; i < arr.length; i++) {
      let profit = arr[i - 1] - arr[i];
  
      if (profit > maximumProfit) {
        console.log(i);
        maximumProfit = profit;
        bestDay = i - 1;
      }
    }
    return `Buy on day '${bestDay + 1}' for a profit of '${maximumProfit}'`;
  }
  
  function profitMain() {
    let week = [128, 97, 121, 123, 98, 97, 105];
    console.log(maxProfit(week));
  }
  
  profitMain();