
function twoSum(nums: number[], target: number): number[] {

	for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [nums[i], nums[j]]
            }
        }
    }
    
    return [];
};

twoSum([2,7,11,15], 9)