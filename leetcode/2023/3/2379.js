/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
const minimumRecolors = function(blocks, k) {
  let left = 0;
  let right = k - 1;
  const len = blocks.length;
  let minRecolor = len + 1;
  while(right < len) {
    minRecolor = Math.min(minRecolor, getMinRecolor(blocks, left, right));
    left++;
    right++;
  }
  return minRecolor;
};

function getMinRecolor(blocks, left, right) {
  let ret = 0;
  for (let i = left; i <= right; i++) {
    if (blocks[i] === 'W') {
      ret++;
    }
  }
  return ret;
}
