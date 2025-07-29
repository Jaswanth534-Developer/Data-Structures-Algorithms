// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]

// Output: 2

// Explanation:

// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]

// Output: 8

// Explanation:

// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.



let  nums = [9,6,4,2,3,5,7,0,1]   // Output: 8



function missingNumber(nums) {
  let ans = 0;
  const n = nums.length;

  for (let i = 0; i <= n; i++) {
    ans ^= i;         // ans all numbers from 0 to n
  }

  for (let num of nums) {
    ans ^= num;       // ans all numbers from the array
  }

  return ans;         // What's left is the missing number
}

const output = missingNumber(nums);
console.log(output)