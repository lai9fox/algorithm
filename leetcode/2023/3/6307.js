/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
const passThePillow = function(n, time) {
  const ontTime = n - 1;
  const r = Math.floor(time / ontTime);
  if (r % 2 === 0) {
    // ->
    return 1 + (time % ontTime);
  } else {
    // <-
    return n - (time % ontTime);
  }
};

passThePillow(20, 9);
