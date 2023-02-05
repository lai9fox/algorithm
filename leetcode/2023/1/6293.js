/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countGood = function(nums, k) {
  const len = nums.length;
  if ((len - 1) * len / 2 < k) {
    return 0;
  }
  recursion(nums, 0, len - 1, k);
  return count;
};

let count = 0;

function recursion(nums, start, end, k) {
  const len = end - start + 1;
  if (start === end || (len - 1) * len / 2 < k) {
    return false;
  }
  const left = recursion(nums, start + 1, end, k);
  const right = recursion(nums, start, end - 1, k);
  if (left || right) {
    count++;
    return true;
  } else {
    let c = 0;
    for (let i = start; i <= end; i++) {
      for (let j = i + 1; j <= end; j++) {
        if (i < j && nums[i] === nums[j]) {
          c++;
        }
      }
    }
    if (c >= k) {
      count++;
      return true;
    } else {
      return false;
    }
  }
}
// 最短的子数组长度

countGood([3, 1, 4, 3, 2, 2, 4], 2);
