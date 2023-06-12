let nums = [0,1,2,3,9,5,6,7,10];

var summaryRanges = function(nums: Array<number>) {

  let order: Array<string> = [""]   
  let point: number = 0
  let i: number = 0
  let Fnumber: number = 0
  let first: number = nums[0];

  for(i; i< nums.length; i++){
    if(nums[i] + 1 != nums[i + 1]){
      if(order[0] === ""){
        Fnumber = nums[i]
        console.log(nums[i])
        order[0] = `${first}->${Fnumber}`
      }
    }
  }

  return order;
};

console.log(summaryRanges(nums))
