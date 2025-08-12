// Example 1:

// Input: s = "leetcode"

// Output: 0


let s = "leetcode"

function firstUniqueChar(s){

    let map = {}
    for(let char of s){
        map[char] ? map[char]++ : map[char] = 1;
    }
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] === 1) return i
    }
    return -1
}

console.log(firstUniqueChar(s))