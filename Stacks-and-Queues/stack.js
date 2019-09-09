// 1. Create a stack class
// Write a Stack class with its core functions (push, pop) from scratch.

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

class _Node {
    // Creates a node containing the data and a reference to the next item
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
      /* If the stack is empty, then the node will be the
         top of the stack */
      if (this.top === null) {
        this.top = new _Node(data, null);
        return this.top;
      }
  
      /* If the stack already has something, 
         then create a new node,
         add data to the new node, and
         have the pointer point to the top */
      const node = new _Node(data, this.top);
      this.top = node;
    }
    pop() {
      /* In order to remove the top of the stack, you have to point
         the pointer to the next item and that next item becomes the
         top of the stack */
      const node = this.top;
      this.top = node.next;
      return node.data;
    }
  }
  
  function main() {
    const starTrek = new Stack();
    starTrek.push("Kirk");
    starTrek.push("Spock");
    starTrek.push("Scotty");
    starTrek.push("McCoy");
    starTrek.pop();
    display(starTrek);
  }
  
  main();
  
  // 2. Useful methods for a stack
  // Using the Stack class above, implement the following helper functions outside of the class:
  // peek(): allows you to look at the top of the stack without removing it
  // isEmpty(): allows you to check if the stack is empty or not
  // display(): to display the stack - what is the 1st item in your stack?
  // Remove McCoy from your stack and display the stack
  
  function peek(stack) {
    //allows you to look at the top of the stack
    if (this.top == null) {
      return "Stack is empty";
    } else {
      return this.top.data;
    }
  }
  
  function isEmpty(stack) {
    //allows to check if stack is empty
    if (this.top == null) {
      return "Stack is empty";
    } else {
      return "Stack is not empty";
    }
  }
  
  function display(stack) {
    isEmpty(stack);
    node = stack.top;
    while (node !== null) {
      console.log(node.data);
      node = node.next;
    }
  }
  
  // 3. Check for palindromes using a stack
  // A palindrome is a word, phrase, or number that is spelled the same forward and backward.
  // For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome
  // if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome.
  // We can use a stack to determine whether or not a given string is a palindrome.
  
  // Write an algorithm that uses a stack to determine whether a given input is palindrome or not.
  
  function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const palindromeStack = new Stack();
    //add string characters to stack
    for (let i = 0; i <= s.length; i++) {
      palindromeStack.push(s.charAt(i));
    }
  
    let newString = "";
    //go through all items in stack, popping each one and adding it to newString
    while (palindromeStack.top) {
      newString += palindromeStack.pop();
    }
    //check to see if original string and newString are a match, if so, original string is a palindrome
    if (s === newString) {
      return true;
    } else {
      return false;
    }
  }
  
  // True, true, true, false
  console.log(is_palindrome("dad"));
  console.log(is_palindrome("A man, a plan, a canal: Panama"));
  console.log(is_palindrome("1001"));
  console.log(is_palindrome("Tauhida"));
  
  // 4. Matching parentheses in an expression
  // Write a function that takes an arithmetic expression as an argument and returns true or false based on matching parenthesis.
  // As a bonus provide a meaningful error message to the user as to what's missing.
  // For example, you are missing a ( or missing a ")".
  
  // For version 1, the parentheses you need to consider are ( and ).
  // Finding a close parenthesis without an open parenthesis is an error (report the location of the close);
  // reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).
  
  // Extension exercise: Recognize 3 pairs of brackets: (), [], and {}.
  // These must be correctly nested; "([)]" is incorrect, and should report an error at the ),
  // stating that you were expecting a ] but found a ). If this is starting to look and sound very familiar,
  // congratulations - you're beginning to write a simple language parser!
  
  // Extension extension exercise: Also recognize 2 types of quote character: "" and ''.
  // Inside quotes, brackets aren't counted at all - in fact, nothing is counted until you reach the corresponding close quote.
  
  function matchingParentheses(str) {
    const stack = new Stack();
    for (let i = 0; i <= str.length; i++) {
      if (str.charAt(i) == "(" || str.charAt(i) == ")") {
        stack.push(str.charAt(i));
      }
    }
    if (stack.top.data == "(") {
      return false;
    } else {
      return true;
    }
  }
  
  console.log(matchingParentheses(" (and )"));
  console.log(matchingParentheses(" ( and "));
  
  // 5. Sort stack
  // Write a program to sort a stack such that the smallest items are on the top (in ascending order).
  // You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).
  
  function sortStack(inputStack, tempStack = null, tempVar = null) {
    if (tempStack === null) {
      tempStack = new Stack();
    }
  
    if (inputStack.top === null) {
      inputStack = tempStack;
      return inputStack;
    }
  
    tempVar = inputStack.pop();
    if (tempStack.top === null || tempVar < tempStack.top.data) {
      tempStack.push(tempVar);
      return sortStack(inputStack, tempStack);
    } else {
      while (tempStack.top !== null && tempVar > tempStack.top.data) {
        inputStack.push(tempStack.pop());
      }
      tempStack.push(tempVar);
      return sortStack(inputStack, tempStack);
    }
  }
  
  const testStack = new Stack();
  
  testStack.push(5);
  testStack.push(3);
  testStack.push(9);
  testStack.push(22);
  testStack.push(1);
  display(sortStack(testStack));
  
  module.exports = { Stack };