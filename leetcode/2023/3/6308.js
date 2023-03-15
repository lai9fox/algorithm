/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthLargestLevelSum = function(root, k) {
  const levelSum = sum(root);
  levelSum.sort((a, b) => b - a);
  return levelSum.length < k ? -1 : levelSum[k - 1];
};

function sum(root){
	const q = [];
  const res = [];
  q.push(root);
  while(q.length !== 0) {
    const len = q.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      sum += node.val;
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
    res.push(sum);
  }
  return res;
}
