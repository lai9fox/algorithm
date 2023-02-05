/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @return {number}
 */
var maximizeWin = function(prizePositions, k) {
  const map = new Map();
  prizePositions.forEach(position => {
    map.set(position, (map.get(position) || 0) + 1);
  });
  


  let answer = 0;
  const maxPosition = prizePositions[prizePositions.length - 1];

  if (k === 0) {
    const t = [...map.values()].sort((a, b) => b - a).slice(0, 2);
    return t[0] + t[1];
  }

  for (let i = 1; i <= 2; i++) {
    let left = 1, right = k + 1;
    let win = 0;
    for (let j = left; j <= right; j++) {
      win += (map.get(j) || 0);
    }
    let max = win;
    let pointer = left;
    while (right <= maxPosition) {
      win += (map.get(right) || 0);
      win -= (map.get(left) || 0);
      if (win > max) {
        max = win;
        pointer = left;
      }
      right++;
      left++;
    }
    answer += max;
    for (let start = pointer; start <= pointer + k; start++) {
      map.delete(start);
    }
  }

  return answer;
};

console.log(maximizeWin([1,2,3,4,5], 1));
