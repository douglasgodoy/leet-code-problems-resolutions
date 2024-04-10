# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    count = 1
    final_node = False

    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        self.count = 1
        self.final_node = False

        if head.next == None and n == head.val: return
            
        def getLastNode(node):
            if node.next == None:
                self.final_node = True
                self.count+= 1
                return
            
            getLastNode(node.next)
            print(self.count)
            if self.count == n:
                node.val = node.next.val
                node.next = node.next.next

            if self.final_node == True: 
                self.count += 1
                return

           
        
        getLastNode(head)

        return head
            
