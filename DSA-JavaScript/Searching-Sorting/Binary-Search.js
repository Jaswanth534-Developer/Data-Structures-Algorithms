// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

let nums = [-1,0,3,5,9,12]
let target = 9

let binarySearch = function(nums, target){
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            return i
        }
    }
    return -1
}
const output = binarySearch(nums, target);
console.log(output)