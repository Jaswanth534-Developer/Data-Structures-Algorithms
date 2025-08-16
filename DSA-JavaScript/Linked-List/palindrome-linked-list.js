
let head = [1,2,2,1]
var isPalindrome = function(head) {
    let arr = [];            // 1) empty array to store list values
    let curr = head;         // 2) pointer to traverse the list

    // Step 1: Store values in array
    while (curr) {           // 3) iterate until end of list (null)
        arr.push(curr.val);  // 4) collect current node's value
        curr = curr.next;    // 5) move to next node
    }

    // Step 2: Check palindrome
    let left = 0, right = arr.length - 1; // 6) two pointers from ends

    while (left < right) {   // 7) compare until they cross
        if (arr[left] !== arr[right])     // 8) mismatch? not palindrome
            return false;
        left++;               // 9) move inward from left
        right--;              // 10) move inward from right
    }

    return true;              // 11) all pairs matched → palindrome
};

console.log(isPalindrome(head))