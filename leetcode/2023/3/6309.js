/**
 * @param {number[]} nums
 * @return {number}
 */
const findValidSplit = function(nums) {
  const left = [];
  const right = [];
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (gys2(nums[i], nums[j]) !== 1) {
        left.push(i);
        right.push(j);
      }
    }
  }
  for (let i = 0; i < len; i++) {
    const leftIndex = left.indexOf(i);
    if (leftIndex !== -1 && right[leftIndex] < i) {
      return i;
    }
  }
  return -1;
};

function gys2(m, n) {
  return m % n === 0 ? (n) : (gys2(n, m % n));
}

findValidSplit([4, 7, 8, 15, 3, 5]);
