// Simple Reverse Linked List Implementation
// Example: [1,2,3,4,5] becomes [5,4,3,2,1]




// Create a node
function createNode(val, next = null) {
    return { val, next };
}

// Convert array to linked list
function arrayToList(arr) {
    if (arr.length === 0) return null;

    let head = createNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = createNode(arr[i]);
        current = current.next;
    }

    return head;
}

// Convert linked list to array
function listToArray(head) {
    let result = [];
    let current = head;

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    return result;
}

// Reverse the linked list (iteratively)
function reverseList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}

let head = arrayToList([10, 20, 30, 40]);

console.log("Original list:", listToArray(head));  

let reversedHead = reverseList(head);

console.log("Reversed list:", listToArray(reversedHead));  
