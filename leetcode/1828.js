/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
  let ret = [];
  for (const querie of queries) {
    let ans = 0;
    for (const point of points) {
      if (inCircle(querie[0], querie[1], querie[2], point[0], point[1])) {
        ans++;
      }
    }
    ret.push(ans);
  }
  return ret;
};

function inCircle(cX, cY, r, x, y) {
  return (x - cX) ** 2 + (y - cY) ** 2 <= r ** 2;
}

const points = [[1,3],[3,3],[5,3],[2,2]];
const queries = [[2,3,1],[4,3,1],[1,1,2]];
const answer = countPoints(points, queries);
console.log(answer);
