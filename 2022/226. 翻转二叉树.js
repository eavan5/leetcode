function invertTree (root) {
  if (!root) return null;
  invertTree(root.left);
  invertTree(root.right);
  [root.left, root.right] = [root.right, root.left];
  return root;
}