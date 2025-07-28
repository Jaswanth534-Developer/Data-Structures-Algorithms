
// Analysis of Algorithms (Background)

// Example Problem : Sum of n natural numbers


// O(1): Mathematical formula
function sum(n) {
    return (n * (n + 1)) / 2;
}


// O(n): Using a loop

let n = 3;
function sum(n){
    let sum = 0;
    for(let i = 0; i <= n; i++){
        sum = sum + i;           // 1+2+3 = 6
    }
    return sum;
}
const output = sum(n);
console.log(output);


// O(n²): Using nested loops
function sum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            total++;
        }
    }
    return total;
}