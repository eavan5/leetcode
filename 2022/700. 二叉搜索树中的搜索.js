var searchBST = function (root, val) {
  if (!root) {
    return null;
  }

  if (root.val > val) {
    return searchBST(root.left, val);
  }

  if (root.val < val) {
    return searchBST(root.right, val);
  }

  return root;
};