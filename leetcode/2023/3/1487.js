/**
 * @param {string[]} names
 * @return {string[]}
 */
const getFolderNames = function(names) {
  const set = new Set();
  const ret = [];
  names.forEach(name => {
    if (set.has(name)) {
      for(let i = 1; ;i++) {
        const n = `${ name }(${ i })`;
        if (!set.has(n)) {
          set.add(n);
          ret.push(n);
          break;
        }
      }
    } else {
      set.add(name);
      ret.push(name);
    }
  });
};
