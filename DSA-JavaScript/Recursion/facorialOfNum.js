

// input n = 5

let n = 5;

function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }

    return n * factorial(n -1);     // recursive call
}
console.log(factorial(n))    



// using loop

function factorial(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result = result * i;
    }
    return result;
}
console.log(factorial(7))