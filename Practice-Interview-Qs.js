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

//Given a document, implement an algorithm to count the number of word occurrences.

function getFrequency(string) {
    var freq = {};
    const stringNoSpecialChara = string.replace(/[\.?",:-]+/g, "");
    const replaceString = stringNoSpecialChara.split(' ')
    for (var i=0; i< replaceString.length;i++) {
        var word = replaceString[i];
        if (freq[word]) {
           freq[word]++;
        } else {
           freq[word] = 1;
        }
    }

    return freq;
};

console.log(getFrequency(`"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`))

/*Given a string, write an algorithm to count the number of words in the 
    string that are palindromes. The output must include a list of the 
    palindromes and the number of palindromes.

function isPalindrome(string) {
    string = string.toLowerCase().replace(/[^a-zA-Z0-9\.?",:-]/g, "");
    const words = string.split(' ')
    console.log(words)
    const palindromeStack = new Stack();

    for (let i = 0; i < s.length; i++) {
        palindromeStack.push(s.charAt(i));
    }

    let newString = '';
    while (palindromeStack.top) {
        newString += palindromeStack.pop();
    }

    if(s === newString) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome(`"Dad gave mom a Tesla as a racecar"`))