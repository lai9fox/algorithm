/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
const pickGifts = function(gifts, k) {
  for (let i = 0; i < k; i++) {
    gifts.sort((a, b) => b - a);
    gifts[0] = Math.floor(Math.sqrt(gifts[0]));
  }

  return gifts.reduce((pre, cur) => pre + cur, 0);
};
