

let x = 4;
let mySqrt = function(x){
    if(x < 2) return x;

    let left = 0;
    let right = x;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(mid * mid === x) return mid;
        else if(mid * mid < x ) left = mid + 1;
        else if(mid * mid > x) right = mid -1
    }
    return right;
}

console.log(mySqrt(x));
