let nums = [0,2,3,5,6,8,10];

var summaryRanges = function(nums: Array<number>) {

  let order: Array<string> = []   
  let point: number = 0
  let i: number = 0
  let Fnumber: number = 0
  let first: number = nums[0];

  for(i; i< nums.length; i++){
    if(nums[i] + 1 != nums[i + 1]){
      order.push(`${nums[i]}`)
      point++
    }
  }
  return order;
};

console.log(summaryRanges(nums))
