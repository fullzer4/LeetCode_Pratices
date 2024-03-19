from typing import List

class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        output = []
        sumN = []
        for i in range(len(nums)):
            sumN.append(nums[i])
            x = sum(sumN)
            output.append(x)

        return output


sol = Solution()
print(sol.runningSum([1,2,3,4]))
