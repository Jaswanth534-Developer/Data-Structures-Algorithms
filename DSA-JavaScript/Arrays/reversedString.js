

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 
let s = ["H","a","n","n","a","h"];

let reversedString = function(s){
    let left = 0 ;
    let right = s.length-1;
    while(left < right){
        let tempHold = s[left];
        s[left] = s[right];
        s[right] = tempHold;
        left++;
        right--;
    }
    return s
}

const output = reversedString(s);
console.log(output);