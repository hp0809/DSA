const mem = require("./memory");
const memory = new mem();

//allocate more space than you initially need
//tradeoff is that you are wasting some memory in order to achieve 0(1) (constant) time complexity
class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0; //how many items you can hold without needing to resize
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    //if the length of the data is longer than the capacity, then you must resize according to the size ratio
    // each time you go over the capacity, you triple the size of memory which is allocated.
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;

    //if you do not need to resize push is 0(1) - constant
    //if you do resize push is 0(n) - linear
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error("Out of memory");
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    return memory.get(this.ptr + index);
    //adds index offset and retrieves the value stored at the memory address - 0(1) constant
  }

  pop() {
    if (this.length == 0) {
      throw new Error("Index error");
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
    //just leave an extra space which will be filled with the next push
    //pointer arithmetic and memory access - 0(1) constant
  }

  insert(index, value) {
    //insert a value into any point in an array
    // shift all of the values after the new value back 1 position.
    //Then put the new value in its correct place.
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
    //best case you add value at end of array so same as push - 0(1)
    //worst case you add at beginning of array and everything moves - 0(n)
    //average = 0(n)
  }

  remove(index) {
    //similar to insert except you are copying the values backward to fill in the space where you removed the value
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
    //best case 0(1) - same as popping
    //worst case 0(n)
    //average case 0(n)
  }
}

Array.SIZE_RATIO = 3;

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();

  arr.push("tauhida");

  console.log(arr.get(0));
  console.log(arr);
}

main();