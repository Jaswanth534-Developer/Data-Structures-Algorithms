
// let  head = [1,2,6,3,4,5,6];
// let val = 6;

function ListNode(val , next = null){
    this.val = val;
    this.next = next;
}

function arrayToLinkedList(arr){
    let dummy = new ListNode(0);
    let curr = dummy;
    for(let num of arr){
        curr.next = new ListNode(num);
        curr = curr.next
    }
    return dummy.next;
}
function linkedListToArray(head){
    let arr = [];
    while(head){
        arr.push(head.val);
        head = head.next
    }
    return arr;
}
let removeLinkedListelements = function(head, val){
    let dummy = new ListNode(0, head);  // Create a dummy node to handle edge cases
    let prev = dummy;   // Pointer to the previous node
    let curr = head;    // Pointer to the current node

    while(curr){
        if(curr.val === val){
            prev.next = curr.next;  // skip the current node
        } else {
            prev = curr;
        }
        curr = curr.next; // move to the next node
    }
    return dummy.next; // return the modified list starting from the first node
}

let head = arrayToLinkedList([1,2,6,3,4,5,6]);
let newHead = removeLinkedListelements(head, 6);
console.log(linkedListToArray(newHead));