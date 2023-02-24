/**
 * 改变两个值，使得 nums[j] - nums[i] 的值最小，nums 是升序的
 * @param {number[]} nums
 * @return {number}
 */
const minimizeSum = function(nums) {
  if (nums.length === 3) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  const len = nums.length;
  return Math.min(nums[len - 1] - nums[2], nums[len - 2] - nums[1], nums[len - 3] - nums[0]);
};

minimizeSum([21, 13, 21, 72, 35, 52, 74]);
// [58,42,8,75,28]
