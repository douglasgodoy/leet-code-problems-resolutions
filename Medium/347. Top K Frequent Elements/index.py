class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = 0
        candidate = -1
        for num in nums:
            if count == 0:
                candidate = num
                count = 1
                continue
            if num == candidate:                count += 1
            else:                count -= 1
            