/**
 * @param {number[]} nums
 * @return {number}
 */
const maxNumOfMarkedIndices = function(nums) {

  nums.sort((a, b) => a - b);
  const len = nums.length;

  const marked = new Array(len).fill(false);
  let mark = 0;

  for (let left = 0, right = 1; right < len;) {
    let b = false;
    while(nums[left] * 2 > nums[right]) {
      right++;
      if (right >= len) {
        b = true;
      }
    }
    if (b) {
      break;
    }
    mark += 2;
    marked[left] = true;
    marked[right] = true;
    left++;
    right++;
    while(marked[left]) {
      left++;
    }
    if (left === right) {
      right++;
    }
  }
  return mark;
};

maxNumOfMarkedIndices([9, 2, 5, 4]);
