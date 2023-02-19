/**
 * n -> 2 ** (m - 1)
 * @param {number} n
 * @return {number}
 */
const minOperations = function(n) {
  if (!(n & (n - 1))) {
    return 1;
  }
  let m = 0;
  while(n > 2 ** m) {
    m++;
  }
  const pre = 2 ** (m - 1);
  const aft = 2 ** m;
  return Math.min(minOperations(n - pre), minOperations(aft - n)) + 1;
};

minOperations(54);
