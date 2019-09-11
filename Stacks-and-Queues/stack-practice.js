// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        //if the stack is empty the node will become the top of the stack
        if(this.top===null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek(stack) {
        //allows you to look at the top of the stack
        if (this.top == null) {
          return "Stack is empty";
        } else {
          return this.top.data;
        }
    }

    isEmpty() {
        if(this.top === null){
            return "Stack is empty";
        } else {
            return "Stack is NOT empty"
        }
    }

    display() {
        this.isEmpty()
        let node = this.top;
        while (node !== null) {
            console.log(node.data);
            node = node.next;
        }
    }
}

const starTrek = new Stack();

starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");
starTrek.pop("McCoy")
console.log(starTrek.display());

function isPalindrome(string) {
    string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const palindromeStack = new Stack();

    for (let i = 0; i < string.length; i++) {
        palindromeStack.push(string.charAt(i));
    }

    let newString = '';
    while (palindromeStack.top) {
        newString += palindromeStack.pop();
    }

    if(string === newString) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("dad"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("1001"));
console.log(isPalindrome("Tauhida"));

function countPalindrome(string) {
    string = string.toLowerCase().replace(/[^a-zA-Z0-9][\.?",:-]+/g, "");
    const words = string.split(' ')
    const palindromeStack = new Stack();
    console.log(string)

    for (let i = 0; i < string.length; i++) {
        palindromeStack.push(string.charAt(i));
    }

    let newString = '';
    while (palindromeStack.top) {
        newString += palindromeStack.pop();
    }

    if(string === newString) {
        return newString;
    } else {
        return false;
    }
}

console.log(countPalindrome(`Dad, cat, racecar`))