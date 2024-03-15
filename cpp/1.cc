#include <iostream>
#include <vector>

class Solution {
public:
  std::vector<int> twoSum(std::vector<int>& nums, int target) {
    
    
    std::vector<int> pos = {0,0};

    for (int i = 0; i < nums.size(); i++) {
      
      int j = i + 1;

      int n1 = nums[i];
      int n2 = nums[j];

      if ( n1 + n2 == target ) {
        pos = {i, j};
      }
    }    
    return pos;
  };
};

int main() {

  std::vector<int> nums = {3, 2, 4};
  int target = 6;

  Solution solution;
  std::vector<int> result = solution.twoSum(nums, target);

  for(int i=0;i<result.size();i++)
        std::cout << result[i] << " " ;

  return 0;
}
