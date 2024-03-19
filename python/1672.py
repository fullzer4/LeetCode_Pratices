from typing import List

class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        x = 0
        for i in accounts:
            y = sum(i)
            if y > x:
                x = y
        return x 

sol = Solution()
print(sol.maximumWealth([[1,2,4],[3,2,1]]))
