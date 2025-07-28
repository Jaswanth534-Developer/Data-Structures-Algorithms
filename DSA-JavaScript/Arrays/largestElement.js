

// Example 1:



let nums = [3, 30, 34, 5, 9];

function findMaxIndex(arr) {
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }

    return maxIndex;
}

// const output = findMaxIndex(nums);
// console.log(output); 

const maxValue = nums[findMaxIndex(nums)];
console.log(maxValue);











