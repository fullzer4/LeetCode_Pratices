from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        length = len(nums)
        for x in range(length):
            y = x + 1
            while y < length:
                if nums[x] + nums[y] == target:
                    return [x, y]
                y = y + 1


sol = Solution()
print(sol.twoSum(nums=[3,2,4], target= 6))
