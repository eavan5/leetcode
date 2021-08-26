class RecentCounter {
  cache: number[];
    constructor() {
      this.cache = []
    }
    ping(t: number): number {
      this.cache.push(t)
      while (this.cache[0]<t-3000) {
        this.cache.shift()
      }
      return this.cache.length
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */