from typing import List

class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        x = []
        fizz = False
        buzz = False
        for i in range(n):
            if (i + 1) % 3 == 0:
                fizz = True
            if (i + 1) % 5 == 0:
                buzz = True
            if fizz == True:
                if buzz == True:
                    x.append("FizzBuzz")
                else:
                    x.append("Fizz")
            elif buzz == True:
                x.append("Buzz")
            else:
                x.append(str(i+1))

            fizz = False
            buzz = False
        return x  

sol = Solution()
print(sol.fizzBuzz(n = 15))
