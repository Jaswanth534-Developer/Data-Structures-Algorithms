

let arr = [4, 9, 5, 0, 2, 10]
let target = 2;

let linerSearch = function(arr, target){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
}

const output = linerSearch(arr, target);
console.log(output)