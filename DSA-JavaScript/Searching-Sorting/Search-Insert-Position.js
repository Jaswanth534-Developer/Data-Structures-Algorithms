
// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

let nums = [1,3,5,6]
let target = 5

let serchPosition = function(nums, target){
    for(let i = 0; i<= nums.length; i++){
        if(nums[i] >= target){
            return i;
        }
    }
    return nums.lenght;
}
const output = serchPosition(nums, target);
console.log(output)