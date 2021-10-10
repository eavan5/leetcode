import { Node } from "./types";
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function levelOrder(root: Node | null): number[][] {
  let res: number[][] = [];
  dfs(root);
  return res;
  function dfs(root: Node | null, temp = 0) {
    if (!root) return;
    if (res.length <= temp) res.push([root.val])
    else res[temp].push(root.val)
    // res[temp] = [...(res[temp] || []), root.val];
    // root.children.forEach(item => dfs(item, temp + 1));
    for (let index = 0; index < root.children.length; index++) {
      dfs(root.children[index], temp + 1);
    }
  }
}
