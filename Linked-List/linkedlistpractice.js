class _Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    push(value) {
        if (this.head === null) {
            this.head = new _Node(value, this.head);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                    tempNode = tempNode.next;
                }
            tempNode.next = new _Node(value, null);
        }
    }
    delete(value) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;
    
        while (currNode !== null && currNode.value !== value) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log("Value not found");
            return;
        }
        previousNode.next = currNode.next;
    }

    insert(value, index) {
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
        previousNode.next = new _Node(value, currentNode);
    }

    exist(value) {
        let currNode = this.head;
        if(!this.head) {
            return null;
        }
        while (currNode.value !== value) {
            if(currNode.next === null) {
                return null;
            } else {
                currNode = currNode.next;
            }
        }

        return true;
    }

    print() {
        if (!this.head) {
          return null;
        }
      
        let arrayList = [];
        let node = this.head;
        while (node !== null) {
          arrayList.push(node);
          node = node.next;
        }
        console.log(arrayList);
      }
}

const newLL = new LinkedList

newLL.push(1)
newLL.push(12)
newLL.push(3)
newLL.push(4)
newLL.push(10)
newLL.push(20)
newLL.print()
newLL.delete(4)
newLL.print()
newLL.insert(6, 4)
newLL.print()


