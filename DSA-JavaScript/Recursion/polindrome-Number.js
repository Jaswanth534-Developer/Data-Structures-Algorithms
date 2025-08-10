
// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.


let x = 121;

let isPolindrome = function(x){
    let s = x.toString();
    let t = s.split('').reverse().join('')
    return s === t;
}
console.log(isPolindrome(x))