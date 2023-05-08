class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        for i in range(len(nums)):
            for j in range(len(nums)):
                if(i != j and nums[i] + nums[j] == target):
                    return [i,j]
                
        return []
            
        
s = Solution()
print(s.twoSum([2,7,11,15], 9))