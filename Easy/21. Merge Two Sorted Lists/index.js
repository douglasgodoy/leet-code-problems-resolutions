/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1, list2) {
  if (!list1 && list2) return list2;
  if (!list2 && list1) return list1;
  if (!list1 && !list2) return null;
  let start = true;
  let mergedList = { val: 0, next: null };

  while (true) {
    if (!list2) {
      addNodeInList(mergedList, list1);
      break;
    }

    if (!list1) {
      addNodeInList(mergedList, list2);
      break;
    }

    if (list1.val >= list2.val) {
      if (!start) addNodeInList(mergedList, list2.val);
      else {
        mergedList = { val: list2.val, next: null };
        start = false;
      }

      list2 = list2.next;
    } else {
      if (!start) addNodeInList(mergedList, list1.val);
      else {
        mergedList = { val: list1.val, next: null };
        start = false;
      }

      list1 = list1.next;
    }
  }

  function addNodeInList(list, value) {
    if (list.next !== null) return addNodeInList(list.next, value);

    if (typeof value === "number") list.next = { val: value, next: null };
    else list.next = value;
  }

  return mergedList;
}

console.log(
  JSON.stringify(
    mergeTwoLists(
      { val: 1, next: { val: 2, next: { val: 4, next: null } } },
      { val: 1, next: { val: 3, next: { val: 4, next: null } } }
    )
  )
);
