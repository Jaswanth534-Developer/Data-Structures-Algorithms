

// let s = 'e'
// let s = '.'

let s = "0";

function isNumber(s){
    s = s.trim();

    const num = Number(s);

    return s !== '' && Number.isFinite(num)
}
console.log(isNumber(s))


// second way 

function isNumber(s){
    s = s.trim(); // it removes white spaces from both sides

       // Regex to match valid numbers (integer, decimal, scientific notation)
    return /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/.test(s)
}
console.log(isNumber(original))
