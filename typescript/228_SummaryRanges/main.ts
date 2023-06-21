let nums = [0,2,3,4,5,6,8,10,11,12,13,16];

var summaryRanges = function(nums: Array<number>) {

  let order: Array<string> = []   
  let i: number = 0
  let numbers: Array<number> = []
  let isolate: number = 0

  for(i; i< nums.length; i++){
    if(nums[i] + 1 != nums[i + 1]){
      isolate = nums[i]
      if(numbers.length != 0){
        console.log(`isolate: ${isolate}`)
        console.log(`realizar ${numbers}`)
        order.push(`${numbers[0]}->${isolate}`)
      }else{
        order.push(`${nums[i]}`)
      }
      numbers = []
    } else{
      numbers.push(nums[i])
    }
  }
  return order;
};

console.log(summaryRanges(nums))
