import { Node} from './types'
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

function preorder(root: Node | null): number[] {
  const res: number[] = [];
  dfs(root)
  return res
  function dfs(root: Node | null) {
    if (!root) return
    res.push(root.val)
    for (let index = 0; index < root.children.length; index++) {
      dfs(root.children[index])
    }
  }
}
