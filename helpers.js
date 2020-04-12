let _ = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < _.length; i++) {
  //logic
}

for (var a of _) {
  //iterable only
}

for (var [key, value] of _) {
  console.log(key + "'s _ is: " + value);
}

for (a in _) {
  //index #
}

while (i < _.length) {
  //logic
  i++;
}

_.forEach(function(v) {
  //console.log(v);
});

function a(b) {
  //logic
  return b;
}

if (_.length) {
  //logic
} else if (!_.length) {
  //logic
}

//sort algo
arr = arr.sort(function(a, b) {
  return a - b;
});

//es6 sort algo
arr.sort((a, b) => a - b);

//smallest # in array
Math.min.apply(Math, arr);

//largest # in array
Math.max.apply(Math, arr);

//binary search tree return sub tree algo
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  while (root) {
    if (root.val === val) return root;
    if (val > root.val) root = root.right;
    else root = root.left;
  }

  return null;
};

//array from set
let k = new Set();
k.add("blah");
Array.from(k);

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

//fibonacci sequence
var fib = function(N) {
  if (N <= 1) {
    return N;
  }
  return fib(N - 1) + fib(N - 2);
};

//remove element in array by value
let idx = arr.indexOf("stringOrNum");
//performs direct mutation
arr.splice(idx, 1);

//adds empty '' placeholder in its place (replaces it with empty string)
arr.splice(idx, 1, "");

//fizzbuzz one liner implementation
var fizzBuzz = function(n) {
  return new Array(n)
    .fill(0)
    .map((a, i) => (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || "" + i);
};

//hashmap occurence counter snippet
function(A="this apple is sour", B="this apple is sweet") {
  let uncommon = A.split(" ").concat(B.split(" "));
  let asdf2 = [];
  let asdf = uncommon.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {});
  Object.keys(asdf).forEach(function(key) {
    if (asdf[key] == 1) {
      asdf2.push(key);
    }
  });

  return asdf2;
};


//two pointer method from leetcode.
//https://leetcode.com/problems/reverse-only-letters/
var reverseOnlyLetters = function(S) {
  if (S.length < 2) return S;
  const a = S.split('');
  let i = 0;
  let j = S.length - 1;
  while (i < j) {
    while (!/[a-zA-Z]/.test(S[i])) i++;
    while (!/[a-zA-Z]/.test(S[j])) j--;
    //this is how you switch array values with each other
    if (i < j) [a[i], a[j]] = [a[j], a[i]];
    i++;
    j--;
  }
  return a.join('');
};

var isMonotonic = function(A) {
  return (
    A.every((v, i) => i === 0 || v <= A[i - 1]) ||
    A.every((v, i) => i === 0 || v >= A[i - 1])
  );
};
//hashtable
//https://leetcode.com/problems/find-the-difference/discuss/530399/3-JavaScript-Solutions

const findTheDifference = (s, t) => {
  let map = {}
  for(const char of t){
      map[char] ? map[char]++ : map[char] = 1
  }
  for(const char of s){
      map[char]--
      if(map[char] === 0)delete map[char]
  }
  return Object.keys(map)[0]
};

//map unique find
//https://leetcode.com/problems/contains-duplicate/
var containsDuplicate = function(nums) {
  let map = {};
  for(let i = 0; i < nums.length; i++) {
      if (map[nums[i]]) {
          return true;
      }
      map[nums[i]] = true;
  }
  return false;
};

//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
//find missing numbers that complete array
var findDisappearedNumbers = function(nums) {
  let mySet = new Set(nums);
  return [...Array(nums.length).keys()].map(num => num+1).filter(num => !mySet.has(num));
};

//total sum of  only left leaves of binary tree
//https://leetcode.com/problems/sum-of-left-leaves/
var sumOfLeftLeaves = function(root) {
  if (!root) return 0;
  let sum = 0;
  let helper = function(node){
      if(!node) return;

      if(node.left && !node.left.left && !node.left.right){
          sum+=node.left.val;
      }

      helper(node.left);
      helper(node.right);
  }

  helper(root);
  return sum;
};


//nifty snippet if object key does not exist
//create it so it does not throw undefined error.
//in this case we are setting it to be an array
!('key_name' in obj) && (obj['key_name'] = []);

//nifty snippet unique values in array
var Unique = [...new Set(arr)];
