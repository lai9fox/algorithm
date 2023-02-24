/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
const mergeArrays = function(nums1, nums2) {
  const map = new Map();
  nums1.forEach(([id, value]) => {
    map.set(id, value);
  });
  nums2.forEach(([id, value]) => {
    map.set(id, (map.get(id) || 0) + value);
  });
  const ids = Array.from(map.keys());
  ids.sort((a, b) => a - b);
  return ids.map(id => [id, map.get(id)]);
};

mergeArrays([[1, 2], [2, 3], [4, 5]],
[[1, 4], [3, 2], [4, 1]]);
