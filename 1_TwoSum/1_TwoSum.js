"use strict";
function twoSum(nums, target) {
    var result = 0;
    var posp = 0;
    var poss = posp + 1;
    var valp = 0;
    var vals = 0;
    while (target != result) {
        valp = nums[posp];
        vals = nums[poss];
        result = valp + vals;
    }
}
;
twoSum([2, 7, 11, 15], 9);
