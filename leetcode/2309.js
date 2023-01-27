/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
  const chars = s.split('');
  const set = new Set(chars);
  for (let i = 25; i >= 0; i--) {
    const cLower = String.fromCharCode(i + 97);
    const cUpper = String.fromCharCode(i + 65);
    if (set.has(cLower) && set.has(cUpper)) {
      return cUpper;
    }
  }
  return '';
};
// 65 97

console.log(greatestLetter('lEeTcOdE'));
console.log(greatestLetter('arRAzFif'));
console.log(greatestLetter('AbCdEfGhIjK'));
