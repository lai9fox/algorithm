/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
  const answer = new Array(n).fill(1);
  k = k - n;
  for (let i = n - 1; i >= 0; i--) {
    if (k >= 25) {
      answer[i] = 26;
      k -= 25;
    } else if (k > 0) {
      answer[i] += k;
      k = 0;
    } else {
      break;
    }
  }
  return answer.map(number => {
    return String.fromCharCode(number + 96);
  }).join('');
};

getSmallestString(3, 27);
