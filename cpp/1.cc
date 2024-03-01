#include <cstdio>
#include <vector>

class Solution {
public:
  std::vector<int> twoSum(std::vector<int>& nums, int target) {
    for (int i = 0; i > nums.size(); i++) {
      int n1 = nums[i];
      int n2 = nums[i++];

      if ( n1 + n2 == target ) {
        printf("foi");
      }
    }    
    return {};
  };
};

int main() {

  std::vector<int> nums = {2, 7, 11, 15};
  int target = 9;

  Solution solution;
  solution.twoSum(nums, target);

  return 0;
}
