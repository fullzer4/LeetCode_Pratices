#include <iostream>
#include <vector>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target){
        for (int i = 0; i < nums.size(); i++) {
            for (int j = 0; j < nums.size(); j++) {
                if(nums[i] + nums[j] == target) {
                    std::vector<int> res;
                    res.push_back(i);
                    res.push_back(j);
                    return res;
                }
            }
        }
        return std::vector<int>();
    }
};

int main() {
    return 0;
}