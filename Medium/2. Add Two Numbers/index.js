/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let tempL1 = getLastLLValue(l1);
  let tempL2 = getLastLLValue(l2);

  const sum = BigInt(tempL1) + BigInt(tempL2);
  const splitNums = sum.toString().split("").reverse();

  const linkedList = new LinkedList(splitNums[0]);
  for (let i = 1; i < splitNums.length; i++) {
    linkedList.addNode({ val: splitNums[i], next: null });
  }

  return linkedList;
};

class LinkedList {
  constructor(head) {
    this.val = head;
    this.next = null;
  }

  addNode(node) {
    let lastNode = this;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }

    lastNode.next = node;
  }
}
function getLastLLValue(node) {
  let numbers = "";
  if (node.next !== null) {
    numbers = getLastLLValue(node.next);
  }

  return numbers.concat(node.val.toString());
}

// revert linked list order (ok)
// sum two lists (ok)
// create a reverse linked list order and then return (ok)
