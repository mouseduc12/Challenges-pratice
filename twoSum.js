var twoSum = function (nums, target) {
  let current = nums.length - 1
  for (let i = 0; i < nums.length; i++) {
    if (current === i) {
      current = nums.length - 1;
    }
    else if (nums[i] + nums[current] < target) {
      i--
      current--
    }
    else if (nums[i] + nums[current] > target) {
      i--
      current--
    }
    else if (nums[i] + nums[current] === target) {
      return [i, current]
    }
  }
  return "Not Found"
}
