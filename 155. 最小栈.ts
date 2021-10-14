class MinStack {
  protected stack: number[] = [];
  protected minStack: number[] = [Infinity]
  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
