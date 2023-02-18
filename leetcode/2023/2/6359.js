/**
 * @param {number} num
 * @return {number}
 */
const minMaxDifference = function(num) {
  const maxNumStrs = `${ num }`;
  let max = num;
  for (let i = 0; i < maxNumStrs.length; i++) {
    if (maxNumStrs[i] < '9') {
      const reg = RegExp(maxNumStrs[i], 'g');
      max = maxNumStrs.replace(reg, '9');
      break;
    }
  }
  const r = RegExp( maxNumStrs[0], 'g');
  const min = maxNumStrs.replace(r, '0');
  return parseInt(max) - parseInt(min);
};

minMaxDifference(99999);
