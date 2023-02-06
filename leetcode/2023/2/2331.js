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
 * @return {boolean}
 */
const evaluateTree = function(root) {
  return recursion(root);
};

function recursion(root) {
  if (!root.left && !root.right) {
    return root.val ? true : false;
  }
  const left = recursion(root.left);
  const right = recursion(root.right);
  if (root.val === 2) {
    return left || right;
  } else {
    return left && right;
  }
}
