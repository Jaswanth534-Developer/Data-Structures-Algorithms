function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function arrayToList(arr) {
    let dummy = new ListNode(0);
    let curr = dummy;
    for (let num of arr) {
        curr.next = new ListNode(num);
        curr = curr.next;
    }
    return dummy.next;
}

var deleteDuplicates = function(head) {
    let curr = head;
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next; // skip duplicate
        } else {
            curr = curr.next;
        }
    }
    return head;
};

// Test
let head = arrayToList([1,1,2,3,3]);
let result = deleteDuplicates(head);

// Convert back to array for easy printing
function listToArray(node) {
    let arr = [];
    while (node) {
        arr.push(node.val);
        node = node.next;
    }
    return arr;
}

console.log(listToArray(result)); // [1,2,3]



// remove duplicates from sorted list array two

let original = [0,0,1,1,1,2,3,3];

let removeDuplicates = function(original){
    let i = 0;
    for(let n of original){
        if(i < 2 || n > original[i-2]){
            original[i+1] = n;
            i++;
        }
    }
    return i;
}

console.log(removeDuplicates(original))