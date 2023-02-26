/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
const divisibilityArray = function(word, m) {
  const w = word.split('');
  const ret = [];
  let concat = '';
  for (const c of w) {
    concat += c;
    if (parseInt(concat) % m === 0) {
      ret.push(1);
    } else {
      ret.push(0);
    }
  }
  return ret;
};

// "86217457695827338571"
// 8
// [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1]
// [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
