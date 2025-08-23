
let nums = [2,2,1,1,1,2,2];
let majorityElement = function(nums){
    let candidate = null;
    let count = 0;
    for(num of nums){
        if(count === 0){
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
}
console.log(majorityElement(nums))