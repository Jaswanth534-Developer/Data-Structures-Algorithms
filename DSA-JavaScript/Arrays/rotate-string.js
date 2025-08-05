

// input  s = "abcde"  goal =" cdeab"   output = true

let s = "abcde";
let goal = "cdeab";

let rotateString = function(s, goal){
    if(s.length !== goal.length) return false;

    for(let i = 0; i < s.length; i++){
        let rotated = s.slice(i) + s.slice(0, i);
        if(rotated === goal) return true;
    }
    return false;
}

const output = rotateString(s, goal);
console.log(output)