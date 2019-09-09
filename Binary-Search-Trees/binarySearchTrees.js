class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        // If the tree is empty then this key being inserted is the root node of the tree
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }

        /* If the tree already exists, then start at the root, 
           and compare it to the key you want to insert.
           If the new key is less than the node's key 
           then the new node needs to live in the left-hand branch */
        else if (key < this.key) {
            /* If the existing node does not have a left child, 
               meaning that if the `left` pointer is empty, 
               then we can just instantiate and insert the new node 
               as the left child of that node, passing `this` as the parent */
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            /* If the node has an existing left child, 
               then we recursively call the `insert` method 
               so the node is added further down the tree */
            else {
                this.left.insert(key, value);
            }
        }
        /* Similarly, if the new key is greater than the node's key then you 
        do the same thing, but on the right-hand side */
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }   
    }

    find(key) {
        // If the item is found at the root then return that value
        if (this.key == key) {
            return this.value;
        }
        /* If the item you are looking for is less than the root 
           then follow the left child.
           If there is an existing left child, 
           then recursively check its left and/or right child
           until you find the item */
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        /* If the item you are looking for is greater than the root 
           then follow the right child.
           If there is an existing right child, 
           then recursively check its left and/or right child
           until you find the item */
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        // You have searched the tree and the item is not in the tree
        else {
            throw new Error('Key Error');
        }
    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            /* If the node only has a left child, 
               then you replace the node with its left child */
            else if (this.left) {
                this._replaceWith(this.left);
            }
            /* And similarly if the node only has a right child 
               then you replace it with its right child */
            else if (this.right) {
                this._replaceWith(this.right);
            }
            /* If the node has no children then
               simply remove it and any references to it 
               by calling "this._replaceWith(null)" */
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }
            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if(!this.left) {
            return this;
        }
        return this.left._findMin();
    }
}

const numTree = new BinarySearchTree();

numTree.insert(3, 3);
numTree.insert(1, 1);
numTree.insert(4, 4);
numTree.insert(6, 6);
numTree.insert(9, 9);
numTree.insert(2, 2);
numTree.insert(5, 5);
numTree.insert(7, 7);

console.log(numTree)

const BST = new BinarySearchTree();

BST.insert('E');
BST.insert('A');
BST.insert('S');
BST.insert('Y');
BST.insert('Q');
BST.insert('U');
BST.insert('E');
BST.insert('S');
BST.insert('T');
BST.insert('I');
BST.insert('O');
BST.insert('N');

console.log(BST)

//Question 4
//returns sum of values of binary search tree
//recursive - 0(n) - linear time complexity

function tree(t) {
    if (!t) {
      return 0;
    }
    return tree(t.left) + t.value + tree(t.right);
  }
  
//37
console.log(tree(numTree));

// 5. Height of a BST
// Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?

function height(tree) {
    //check if tree has any values
    if (!tree) {
      return 0;
    }
  
    let leftHeight = height(tree.left);
    let rightHeight = height(tree.right);
  
    return 1 + Math.max(leftHeight, rightHeight);
  }
  
//5
console.log(height(numTree));
  
// 6. Is it a BST?
// Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.
function findThirdLargest(tree) {
  //check if tree has any values
  if (!tree) {
    return false;
  }
  //go right as far down tree as there are values
  while (tree.right !== null) {
    tree = tree.right;
  }
  // at this point, tree = largest value
  //if there is a value to left of tree, go left, then right as far as you can
  if (tree.left) {
    tree = tree.left;
    while (tree.right !== null) {
      tree = tree.right;
    }
    // now tree = 2nd largest value
    //if there is a value to the left of the 2nd largest value, go there, then right as far as you can
    if (tree.left) {
      tree = tree.left;
      while (tree.right !== null) {
        tree = tree.right;
      }
    } else {
      //if there was no tree to the left, check if the tree value is less than the parent's value, if so, tree becomes node two values up tree
      if (tree.key < tree.parent.key) {
        tree = tree.parent.parent;
      } else {
        //otherwise, tree becomes it's parent node
        tree = tree.parent;
      }
    }
    }
    // if the largest doesn't have children
    else {
      tree = tree.parent;
      // largest nodes parent is the 2nd largest node( now tree = 2nd largest node)
      if (tree.left) {
        tree = tree.left;
        while (tree.right !== null) {
          tree = tree.right;
        }
      } else {
        tree = tree.parent;
      }
    }
    //return third largest value in tree
    return tree.key;
  }
  
  console.log(findThirdLargest(numTree));
  
  // 8. Balanced BST
  // Write an algorithm that checks if a BST is balanced (i.e., a tree where no 2 leaves differ in distance from the root by more than 1).
  
  function isBalanced(tree) {
    //if no values in tree, tree is balanced
    if (!tree.parent && !tree.left && !tree.right) {
      return true;
    }
  
    //if no values to left or right of root, tree is balanced
    if (!tree.left && !tree.right) {
      return 1;
    }
  
    let depth = 1;
  
    if (tree.left && tree.right) {
      //recursion!
      let left = isBalanced(tree.left);
      let right = isBalanced(tree.right);
  
      if (left === false || right === false) {
        return false;
      }
  
      if (Math.abs(left - right) > 1) {
        return false;
      } else if (left > right) {
        depth += left;
      } else {
        depth += right;
      }
    } else if (tree.left) {
      let left = isBalanced(tree.left);
  
      if (left === false) {
        return false;
      } else {
        depth += left;
      }
    } else {
      let right = isBalanced(tree.right);
  
      if (right === false) {
        return false;
      } else {
        depth += right;
      }
    }
  
    if (!tree.parent) {
      return true;
    } else {
      return depth;
    }
  }
  
  const balTree = new BinarySearchTree();
  
  balTree.insert(4);
  balTree.insert(2);
  balTree.insert(6);
  
  //true
  console.log(isBalanced(balTree));
  //false
  console.log(isBalanced(numTree));
  
  // 9. Are they the same BSTs?
  // You are given two arrays which represent two sequences of keys that are used to create two binary search trees.
  // Write a program that will tell whether the two BSTs will be identical or not without actually constructing the tree.
  // You may use another data structure such as an array or a linked list but don't construct the BST.
  // What is the time complexity of your algorithm?
  //  E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays but will create the exact same BSTs and your program should return true.
  
  // function bstMatch(arr1, arr2) {
  //   //arrs of diff lengths obvs won't make identical bsts
  //   if (arr1.length !== arr2.length) {
  //     return false;
  //   }
  //   //sort the arrays
  //   arr1.sort();
  //   arr2.sort();
  //   //loop through first array, checking that each value has a match in the second array(same index)
  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr1[i] !== arr2[i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  // //This is time complexity o(n)
  // console.log(bstMatch([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]));
  
  function AreTheySame(arr1, arr2) {
    //if arrays length don't match, the bsts won't!
    if (arr1.length !== arr2.length) false;
    //both root nodes must match
    if (arr1[0] !== arr2[0]) false;
  
    let left1 = [];
    let right1 = [];
    let left2 = [];
    let right2 = [];
  
    //loop through the array
    for (let i = 0; i < arr1.length; i++) {
      //if current item in array is smaller than the root node, push item to left array, otherwise push to right array
      if (arr1[i] < arr1[0]) {
        left1.push(arr1[i]);
      } else {
        right1.push(arr1[i]);
      }
      //same as above for second array
      if (arr2[i] < arr2[0]) {
        left2.push(arr2[i]);
      } else {
        right2.push(arr2[i]);
      }
    }
  
    //check if right arrays are same length / tree is balanced
    if (right1.length === right2.length) {
      //loop through right arrays
      for (let i = 0; i < right1.length; i++) {
        //check that the right arrays values match and are in same order
        if (right1[i] !== right2[i]) {
          return false;
        } else if (left1[0] !== left2[i]) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
  
  //Complexity is O(n^2) since you need to go through each array 2 times to find the
  //matching pair in the other.
  
  console.log(AreTheySame([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]));
