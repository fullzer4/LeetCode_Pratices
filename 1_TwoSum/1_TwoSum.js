"use strict";
function twoSum(nums, target) {
    var result = [];
    for (var n1 = 0; n1 < nums.length; n1++) {
        for (var n2 = n1 + 1; n2 < nums.length; n2++) {
            if (nums[n1] + nums[n2] == target) {
                return [n1, n2];
            }
        }
    }
    return result;
}
