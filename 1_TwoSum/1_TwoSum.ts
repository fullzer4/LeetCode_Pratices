function twoSum(nums: number[], target: number) {
    var result:number = 0
    var posp:number = 0
    var poss:number = posp + 1
    var valp:number = 0
    var vals:number = 0
    
    while (target != result){
        valp = nums[posp]
        vals = nums[poss]

        result = valp + vals

    }
};

twoSum([2,7,11,15], 9)