// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false

let n = 6;

// let isPowerOfTwo = function (n){
//     if(n === 1){
//         return true;
//     } else if(n % 2 !== 0 || n < 1){
//         return false;
//     }
//     return isPowerOfTwo(n / 2);
// }

// const output = isPowerOfTwo(n);
// console.log(output)


// Approcah 2

 let isPowerOfTwo = function(n){
  if(n <= 0) return false;

  while(n % 2 === 0) {
    n = n / 2;
  }
  return n === 1
}
const output = isPowerOfTwo(n);
console.log(output)


// Approach 3

// let isPowerOfTwo = function(n){
//     return n > 0 && (n & (n - 1)) === 0;
// }
// const output = isPowerOfTwo(n);
// console.log(output)