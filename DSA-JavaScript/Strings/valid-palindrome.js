
// let s = "racecar"
// let s = 'malayalam';
// let s = 'hello'

let s = 'A man, a plan, a canal: Panama'

function isPalindrome(s){
    const cleared = s.toLowerCase().replace(/[^a-z0-9]/g,"")

        const reversed = cleared.split('').reverse().join('')
         return cleared === reversed
}

console.log(isPalindrome(s))