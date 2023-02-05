/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function(n, queries) {
  const mat = new Array(n).fill(new Array(n).fill(0));
  for (let querie of queries) {
    for (let i = querie[0]; i <= querie[2]; i++) {
      for (let j = querie[1]; j <= querie[3]; j++) {
        mat[i][j] = mat[i][j] + 1;
      }
    }
  }
  return mat;
};

rangeAddQueries(3, [[1,1,2,2],[0,0,1,1]]);
