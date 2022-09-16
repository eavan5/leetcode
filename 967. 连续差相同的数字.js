/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {
    let ans = [];
    for (let i = 1; i <= 9; i++) {
        backtrack(ans, [i], 1, n, k);
    }
    return ans;
};

function backtrack(ans, track, i, n, k) {
    if (i === n) {
        let str = track.join("");
        ans.push(+str);
        return;
    }
    if (track.at(-1) + k <= 9) {
        track.push(track.at(-1) + k)
        backtrack(ans, track, i + 1, n, k);
        track.pop();
    }
    if (k !== 0) {
        if (track.at(-1)- k >= 0) {
            track.push(track.at(-1) - k)
            backtrack(ans, track, i + 1, n, k);
            track.pop();
        }
    }
}
