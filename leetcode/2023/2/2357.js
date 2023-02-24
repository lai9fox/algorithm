/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumOperations = function(nums) {
  const sortNums = Array.from(new Set(nums)).sort((a, b) => a - b);
  if (sortNums[0] === 0) {
    return sortNums.length - 1;
  } else {
    return sortNums.length;
  }
};

/**
 * 1, 2, 4, 5, 10
 * 1-1 , 2-1, 4-1, 5-1, 10-1
 * 0 1 3 4 9
 */
