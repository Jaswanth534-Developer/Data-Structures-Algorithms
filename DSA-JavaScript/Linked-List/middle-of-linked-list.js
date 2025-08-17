// Define Linked List Node
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Create Linked List [1,2,3,4,5]
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Your middleNode function
var middleNode = function(head) {
  if (head === null || head.next === null) return head;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// Test
let middle = middleNode(head);
console.log(middle.val); // 3
