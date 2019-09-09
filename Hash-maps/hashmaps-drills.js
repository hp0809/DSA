const HashMap = require("./hash");
const HashSepChain = require("./hashSepChain");

function main() {
  const lor = new HashMap();
  lor.MAX_LOAD_RATIO = 0.5;
  lor.SIZE_RATIO = 3;

  lor.set("Hobbit", "Bilbo");
  lor.set("Hobbit", "Frodo");
  lor.set("Wizard", "Gandolf");
  lor.set("Human", "Aragorn");
  lor.set("Elf", "Legolas");
  lor.set("Maiar", "The Necromancer");
  lor.set("Maiar", "Sauron");
  lor.set("RingBearer", "Gollum");
  lor.set("LadyOfLight", "Galadriel");
  lor.set("HalfElven", "Arwen");
  lor.set("Ent", "Treebeard");

  console.log(lor);

  console.log(lor.get("Hobbit"));
  console.log(lor.get("Maiar"));
}

main();

// Print your hash map and notice the length and items that are hashed in your hash map. Have you hashed all the items you were asked to?
//lor.length = 9, missing values for bilbo and the necromancer
// Retrieve the value that is hashed in the key "Maiar" and Hobbit.
//Frodo
//Sauron
// What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.
//Yes.  values bilbo and necromancer were declared before values with matching keys were.  The new values, frodo and sauron, replaced them.
// What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
//initial capacity of the hashmap is 8, resize should be triggered once lor length reaches 5 - resize multiplies capactiy(8) by size ratio(3) = 24

const WhatDoesThisDo = function() {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  let map1 = new HashMap();
  //sets two objects with same key
  map1.set(str1, 10); //key 'Hello World"
  map1.set(str2, 20); //key 'Hello World
  //second hashmap, sets two objects with same keys, values are flipped from above...
  //str3 and str 2 should match(20), str 4 and str 1 match(10)...
  //but bc they all share the same keys, the last values declared with those keys will be hashed into the spot .get expects to find our string values
  let map2 = new HashMap();
  let str3 = str1; //'Hello World'
  let str4 = str2; //'Hello World'
  map2.set(str3, 20);
  map2.set(str4, 10);

  //so these values are flipped from their original expectation
  //.get is looking for str1 where it was hashed to, but since then str2 was mapped to that slot, so we are retrieving the value for str2
  console.log(map1.get(str1));
  //.get is looking for str3 value where it was hashed to, but since then str4 has been hashed to that slot, so we are retriving the value for str4
  console.log(map2.get(str3));
};

WhatDoesThisDo();

// 4. Remove duplicates
// Implement a function to delete all duplicated characters in a string and keep only the first occurrence of each character.
// For example, if the input is string “google”, the result after deletion is “gole”.
// Test your program with a sentence as well such as "google all that you think can think of".

function deleteDuplicates(str) {
  let m = new HashMap();
  let table = m._hashTable;
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    m.set(str.charAt(i), str.charAt(i));
  }

  for (let i = 0; i < table.length; i++) {
    newStr += table[i].key;
  }

  return newStr;
}

console.log(deleteDuplicates("google all that you think can think of"));

// 5. Any permutation a palindrome
// Write an algorithm to check whether any permutation of a string is a palindrome.
// Given the string "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to "racecar",
//  which is a palindrome. In contrast, given the word "north", the algorithm should return false,
//  because there's no way to rearrange those letters to be a palindrome.

function palindrome(str) {
  const result = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!result.delete(str[i])) {
      result.set(str[i], 1);
    }
  }
  if (result.size <= 1) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("acecarr"));
console.log(palindrome("north"));

// 6. Anagram grouping
// Write an algorithm to group a list of words into anagrams.
// For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'],
// the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].

const sort = word =>
  word
    .split("")
    .sort()
    .join("");
function anagrams(words) {
  let map = new Map();
  words.forEach(word => {
    // east
    const groupedWords = sort(word); // 1st run: aest
    const group = map.get(groupedWords) || []; // 1st run: become []
    map.set(groupedWords, [...group, word]); // (aest (this is []) , east)
  });
  return Array.from(map.values());
}

console.log(anagrams(["east", "cars", "acre", "arcs", "teas", "eats", "race"]));

// 7. Separate Chaining
// Write hash map, use separate chaining as the collision resolution mechanism.

// Test your hash map with the same values from the lor hash map.

function sepChainMain() {
  const lotr = new HashSepChain();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandolf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");

  console.log(lotr);
  console.log(lotr.get("Maiar"));
  console.log(lotr.get("Hobbit"));
}

sepChainMain();