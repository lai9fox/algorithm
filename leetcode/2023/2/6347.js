/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
  const a = ['a', 'e', 'i', 'o', 'u'];
  words.forEach((v, index, arr) => {
    const str = v;
    arr[index] = a.includes(v.charAt(0)) && a.includes(v.charAt(v.length - 1));
  });
  const ret = [];
  queries.forEach(querie => {
    let [start, end] = querie;
    let number = 0;
    for (let i = start; i <= end; i++) {
      words[i] && number++;
    }
    ret.push(number);
  })
  return ret;
};
