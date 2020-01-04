// var findDuplicate = function(nums) {
//     const moization = {}
//     for(let i = 0; i < nums.length; i++){
//       if(moization[nums[i]]){
//         return nums[i]
//       } else {
//         moization[nums[i]] = nums[i]
//       }
//     }
//     return 'Not found it'
// };

// var findDuplicate = function(nums) {
//    for(let i = 0; i < nums.length; i++){
//      for(let y = i + 1; y < nums.length; y++){
//        if(nums[i] === nums[y]){
//          return nums[i]
//        }
//      }
//    }
//    return 'Not Found'
// };

var findDuplicate = function(nums) {
  nums.sort((a, b) => a - b)

  for(let i = 0; i < nums.length; i++){
    if(nums[i] === nums[i + 1]){
      return nums[i]
    }
  }
};
// findDuplicate([2,3,2,1,4,3])
// findDuplicate([3,2,1,4,3])
findDuplicate([4,2,1,3, 2, 4])
