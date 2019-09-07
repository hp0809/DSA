const Memory = require("./memory");
const memory = new Memory();

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }

}


function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    //2.1 : Array { length: 1, _capacity: 3, ptr: 0 }
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    //2.2 : Array { length: 6, _capacity: 12, ptr: 3 }
    //array.push(5) - conditional case not met, value is added - length: 2, _capacity: 3, ptr: 0
    //array.push(15) - conditional case not met, value is added - length: 3, _capacity: 3, ptr: 0
    //array.push(19) - conditional is met, value is added, capacity is tripled, ptr is moved + 3 - length: 4, _capacity: 12, ptr: 3
    //array.push(45) - conditional case not met, value is added  - length: 5, _capacity: 12, ptr: 3
    //array.push(10) - length: 6, _capacity: 12, ptr: 3 - length: 6, _capacity: 12, ptr: 3

    arr.pop();
    arr.pop();
    arr.pop();
    //length: 3, _capacity: 12, ptr: 3
    //last three values added have been removed so capacity remains the same - we are leaving extra space which can be used on next push

    console.log(arr.get(1));
    arr.push("tauhida");
    // 5
    //NaN - a string is not a number...
    //to increase size of array when full 
}
main()


function URLify(str) {

    let newString = [];
    for (i = 0; i <= str.length; i++) {
      if (str.charAt(i) === " ") {
        newString.push("%20");
      } else {
        newString.push(str.charAt(i));
      }
    }
    console.log(newString.join(""));
}

URLify("tauhida parveen");
URLify("www.thinkful.com/tauh ida parv een");

function filter(arr) {
    let newarr = [];
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] >= 5) {
        newarr.push(arr[i]);
        }
    }
    console.log(newarr);
}

filter([3, 6, 5, 9, 0, 3, 6, 6]);

function maxSum(arr) {
    let currentSum = 0;
    let maxSum = 0;
  
    //loop through array
    for (let i = 0; i < arr.length; i++) {
      // set currentSum to currentSum plus array item
      currentSum += arr[i];
  
      if (currentSum > currentSum + arr[i + 1]) {
        //if currentSum is greater than itself plus next item in array, set currentSum as maxSum
        maxSum = currentSum;
      }
    }
    return maxSum;
}
  
console.log(maxSum([4, 6, -3, 5, -2, 1]))

function mergeArrays(arrA, arrB) {
    //make new empty array to hold results
    let newArr = [];
    //loop through first array, pushing each item into our new array
    for (let i = 0; i < arrA.length; i++) {
      newArr.push(arrA[i]);
    }
    //loop through second array, pushing each item into new array
    for (let i = 0; i < arrB.length; i++) {
      newArr.push(arrB[i]);
    }
    //sort new array and return
    return newArr.sort((a, b) => a - b);
}
  
console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

function removeChars(str, [...characters]) {
    //create empty string to store answer
    let newStr = "";
    //loop through each character in given string
    for (i = 0; i <= str.length; i++) {
      //make character in string lowercase
      let char = str.charAt(i).toLowerCase();
      //check to see if the character in string matches any in the list of characters given as the second argument(which we spread into an array)
      if (characters.indexOf(char) < 0) {
        //if no match, add that character to new string (concatenate)
        newStr = newStr + char;
      }
    }
    return newStr;
}
  
console.log(removeChars("Battle of the Vowels: Hawaii vs. Grozny", "aeiou"));

function products(arr) {
    //create new empty array to store results
    let newArr = [];
    //create new variable value
    let product = 1;
  
    for (let i = 0; i < arr.length; i++) {
      //loop through array, multiplying each item in array to value
      product = product * arr[i];
    }
    //at end of first for loop product is equal to all items in array multiplied together
  
    for (let j = 0; j < arr.length; j++) {
      //loop through array a second time, dividing product by item in array (gives us the product of all items in array other than the current item)
      //push that value to our new array
      newArr.push(product / arr[j]);
    }
    return newArr;
  }
  
console.log(products([1, 3, 9, 4]));

function rotation(str1, str2) {
    return (str1 + str1).includes(str2);
}

console.log(rotation('amazon', 'azonam'))