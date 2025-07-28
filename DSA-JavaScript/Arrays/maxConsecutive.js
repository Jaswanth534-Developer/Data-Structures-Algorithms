
// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2


const nums = [1, 1, 0, 1, 1, 1];

function findMaxConsecutiveOnes(arr) {
  let max = 0;
  let count = 0;
  for (const n of arr) {
    count = n === 1 ? count + 1 : 0;
    if (count > max) max = count;
  }
  return max;
}

console.log(findMaxConsecutiveOnes(nums));