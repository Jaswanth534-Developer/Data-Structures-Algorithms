// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessarily unique.
 


var nums = [5,2,3,1]

var sortArray = function(nums) {
    quick(nums, 0, nums.length - 1);
    return nums;
};

function quick(nums, low, high) {
    if (low >= high) return;

    let s = low, e = high;
    const mid = Math.floor((s + e) / 2);
    const pivot = nums[mid];

    while (s <= e) {
        while (nums[s] < pivot) s++;
        while (nums[e] > pivot) e--;
        if (s <= e) {
            [nums[s], nums[e]] = [nums[e], nums[s]];
            s++;
            e--;
        }
    }

    quick(nums, low, e);
    quick(nums, s, high);
}

const output = sortArray(nums)
console.log(output)