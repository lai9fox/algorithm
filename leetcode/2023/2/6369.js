/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRigthDifference = function(nums) {
  const leftSum = [];
  const rightSum = [];
  let sum = nums.reduce((pre, cur) => pre + cur, 0);
  let l = 0;
  for (const num of nums) {
    leftSum.push(l);
    rightSum.push(sum - num);
    l += num;
    sum -= num;
  }
  const ret = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    ret.push(Math.abs(leftSum[i] - rightSum[i]));
  }
  return ret;
};
