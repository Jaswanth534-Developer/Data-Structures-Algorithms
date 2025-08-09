//  Input: head = [3,2,0,-4], pos = 1
// Output: true


class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function createLinkedList(arr, pos){
    if(arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = null;

    for(let i = 1; i < arr.length; i++){
        current.next = new ListNode(arr[i]);
        captureEvents = current.next;
        if(i === pos){
            cycleNode = current
        }
    }

    if(pos >= 0){
        current.next = pos === 0 ? head : cycleNode;
    }
    return head
}
let hasCycle = function(head){
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            return true;
        }
    }
    return false;
}

const head = createLinkedList([3,2,0, -4], 1)
console.log(hasCycle(head))