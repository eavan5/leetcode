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

function postorder(root: Node | null): number[] {
  let res: number[] = [];
  function dfs(root: Node | null) {
    if (!root) return;
    for (let index = 0; index < root.children.length; index++) {
      dfs(root.children[index]);
    }
    res.push(root.val);
  }
  dfs(root);
  return res;
}
