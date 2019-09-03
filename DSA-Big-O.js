/*
Big O classifications
Constant time O(1) - No matter the size of your input, the algorithm will take the same amount of time to complete. 
Logarithmic time O(log(n)) - algorithms do take longer with larger inputs, running time increases slowly.
Linear time O(n)-  running times that are directly proportional to the size (n) of the input. 
Polynomial time O(n^k)- nested loops.
Exponential time O(2^n)-times that grow rapidly with any increase in input size. 
*/


// 1a - constant O(1) time because it is similar to picking out an element in an array of people
// 1b - linear O(n) time because you have to loop through an array of people, and the time it takes depends on the size of the group of people

// 2. Even or odd - constant O(1) time because regardless of the size of the input, the time it takes to compute is the same
function isEven(value) {
    let tick = 0;
    if(value % 2 === 0) {
        tick++;
        console.log(tick);
        return true;
    } else {
        tick++;
        console.log(tick);
        return false;
    }
}

// isEven(6);

// 3. Are you here? - the time is polynomial O(n^k) time because we have nested loops

function areYouHere(arr1, arr2) {
    let ticks = 0;

    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        ticks++;
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            ticks++;
            console.log(ticks);
            if (el1 === el2) return true;
        }
    }
    console.log(ticks);
    return false;
}

// areYouHere([1,2,3], [5,6,7,8,3]);

// 4. Doubler - has a big O linear O(n) time complexity because the amount of time it takes to execute is the same as the length input 

function doubleArrayValues(array) {
    let ticks = 0;
    for (let i = 0; i < array.length; i++) {
        ticks++;
        array[i] *= 2;
    }
    console.log(ticks);
    return array;
}

// doubleArrayValues([1,2,3,4,5,6]);
// doubleArrayValues([1,2,3,4,5,6,1,2,3,4,5]);

// 5. Naive search - has a linear O(n) time complexity because the algorith takes as long as the position of the searched 
// element in the array 

function naiveSearch(array, item) {
    let ticks = 0;
    for (let i = 0; i < array.length; i++) {
        ticks++;
        if (array[i] === item) {
            ticks++;
            console.log(ticks);
            return i;
        }
    }
    console.log(ticks);
}

// naiveSearch([1,2,3,4,5,6,8,9,12,13,14,15,16], 15);
// naiveSearch([1,2,3,4,5], 2);

// 6. Creating pairs - has a polynomial O(n^k) time complexity 
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// createPairs([1,2,3,4,5,6,7]);

// 7. Compute the sequence - generates an array of a fibonacci sequence 
// the algorithm has a linear O(n) time complexity because the time it takes to compute is the same as the length from 0 to the input number

function compute(num) {
    let ticks = 0;
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    console.log(ticks);
    return result;
}

// console.log(compute(4));

// 8. An efficient search - has logarithmic O(log(n)) time complexity because regardless of the length of the array, the time doesn't change much 

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;
    let ticks = 0;
    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];
        ticks++;
        console.log(ticks);
        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// efficientSearch([1,2,3,4,5,6,7,8,12,14,15,16,20,22,33,44,55,56,77], 77);

// 9. Random element - has a linear O(n) time complexity because it takes as long as the distance of the random number from 0  

function findRandomElement(arr) {
    let ticks = 0;
    ticks++;
    return arr[Math.floor(Math.random() * arr.length)];
}

// findRandomElement([1,2,3,4,5,6,7,8]);

// 10. What Am I? - 

function isWhat(n) {
    let ticks = 0;
    if (n < 2 || n % 1 != 0) {
        ticks++;
        console.log(ticks);
        return false;
    }
    for (let i = 2; i < n; ++i) {
        ticks++;
        console.log(ticks);
        if (n % i == 0){
            ticks++;
            console.log(ticks);
            return false;
        } 
    }
    ticks++;
    console.log(ticks);
    return true;
}

// isWhat(10);

// 12. Iterative version

function sheepJump(numSheep) {
    for(let i = numSheep; i > 0; i--) {
        console.log(`${i} Another sheep jump over the fence`);
    }
}

// sheepJump(3); has a O(n) linear time complexity because length of the loop dictates the time of the algorithm

function powerCalculator(intBase, intEx) {

    for(let i = 1; i < intEx; i++) {
        intBase *= intBase;
    }
    return intBase;
}

// console.log(powerCalculator(10,2)); has a O(n) linear time complexity because of the length of the loop 

function revString(string) {
    let newStr = [];
    let strArr = string.split("");
    for(let i = strArr.length-1; i >= 0; i--) {
        newStr.push(strArr[i]);
    }
    return newStr.join("");
}

// console.log(revString('enzo')); has a time complexity of Linear O(n) because the input number determies the length of the loop

function nTriangle(numDots) {
    let sum = 0;
    for(let i = 1; i <= numDots; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
}

// nTriangle(5); has a time complexity of Linear O(n) because the input number determies the length of the loop

function strSplit(string) {
    let newStr = [];
    stringArr = string.split("");
    for(let i = 0; i < string.length; i++) {
        if (stringArr[i] !== '/') {
            newStr.push(stringArr[i]);
        }
    }
    console.log(newStr.join(""));
    return newStr.join("");
}

// strSplit('11/22/1991'); has a time complexity of Linear O(n) because the input number determies the length of the loop

function fibonacci(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
}

// console.log(fibonacci(5)); has a time complexity of Linear O(n) because the input number determies the length of the loop

function factorial(num) {
    let modNum = num;
    for(let i = 1; i < num; i++) {
        modNum *= i;
    }
    console.log(modNum);
    return modNum
}

factorial(5); // has a time complexity of Linear O(n) because the input number determies the length of the loop


/*
Big O classifications
Constant time O(1) - No matter the size of your input, the algorithm will take the same amount of time to complete. 
Logarithmic time O(log(n)) - algorithms do take longer with larger inputs, running time increases slowly.
Linear time O(n)-  running times that are directly proportional to the size (n) of the input. 
Polynomial time O(n^k)- nested loops.
Exponential time O(2^n)-times that grow rapidly with any increase in input size. 
*/