
// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps


// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


let  n = 2;

let climbStairs = function(n){
     let first = 1;
     let second = 1;
     let third  = 0;
     for(let i = 2; i <= n; i++){
        third = first + second;
        first = second;
        second = third;
     }
     return third;
}

console.log(climbStairs(n))