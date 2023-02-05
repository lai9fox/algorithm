/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minCapability = function(nums, k) {
  const max = [];
  const len = nums.length;
  for (let i = 0; i < k; i++) {
    if (i === 0) {
      max.push(nums.slice());
    } else {
      max.push(new Array(len).fill(0));
    }
  }
  for (let i = 1; i < k; i++) {
    for (let j = 0; j < len; j++) {
      if (j === 0 || j === 1){
        max[i][j] = nums[j];
      } else {
        max[i][j] = Math.max(max[i - 1][j - 1], max[i - 1][j - 2], nums[j]);
      }
    }
  }

  max[k - 1].sort((a, b) => a - b);
  return max[k - 1][0];
};


const res = minCapability([2, 7, 9, 3, 1], 2);
console.log(res);
