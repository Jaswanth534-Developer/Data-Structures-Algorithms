//  Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


let n = 2   // op - 1
// let n = 3   // op - 2
// let n = 4;   // op-3

 var fib = function(n){
    if(n <= 1){
        return n;
    }
    return fib(n-1) + fib(n-2)
 }

 const output=  fib(n)
 console.log(output)



 
// var fib = function (n) {
//   let a = 0;
//   let b = 1;
//   let count = 2;
//   let c;
//   if (n == 0 || n == 1) return n;
//   while (count <= n) {
//     c = a + b;
//     a = b;
//     b = c;
//     count++;
//   }
//   return c;
// };