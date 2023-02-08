/**
 * @param {string[]} folders
 * @return {string[]}
 */
const removeSubfolders = function(folders) {
  folders.sort();
  const ret = new Set();
  folders.forEach(folder => {
    const fold = folder.split('/').filter(f => f);
    const len = fold.length;
    let path = '';
    for(let i = 0; i < len; i++) {
      path += `/${ fold[i] }`;
      if (ret.has(path)) {
        break;
      }
    }
    ret.add(path);
  });
  return Array.from(ret);
};

console.log(removeSubfolders(
['/a', '/a/b', '/c/d', '/c/d/e', '/c/f']
));
