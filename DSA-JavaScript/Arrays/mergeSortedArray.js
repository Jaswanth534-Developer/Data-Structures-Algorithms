

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let  n = 3


var mergeSortedArray = function(num1, m, num2, n){
    let i = m-1;
    let j = n-1;
    let k = m + n - 1;
    while(j >= 0) {
        if(i >= 0 && num1[i] > num2[j]){
            num1[k] = num1[i];
            i--;
        } else {
            num1[k] = num2[j];
            j--;
        }
        k--;
    }
    return num1;
} 
const result = mergeSortedArray(nums1, m, nums2, n);
console.log(result);