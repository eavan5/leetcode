const wordBreak = (s, wordDict) => {
  const wordSet = new Set(wordDict);
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= len; i++) {
    for (let j = i - 1; j >= 0; j--) {   
      const suffix = s.slice(j, i);     
      if (wordSet.has(suffix) && dp[j]) {
        dp[i] = true;
        break;  
      }
    }
  }
  return dp[len];
};
