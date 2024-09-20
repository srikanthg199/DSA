/**
 * @param {number[]} nums
 * @return {number}
 */

function fun (nums, index, dp) {
    // Memo
    // if (index === 0) return nums[index];
    // if (index < 0) return 0;
    // if (dp[index] !== -1) return dp[index]
    // let pick = nums[index] + fun(nums,index - 2, dp);
    // let notPick = 0 + fun(nums,index-1, dp);
    // const max = Math.max(pick, notPick);
    // dp[index] = max; 
    // return max;

    //Table
    // dp[0] = nums[0];
    // for (let i = 1; i < nums.length; i++) {
    //     let take = nums[i];
    //     if (i > 1) take += dp[i-2];
    //     let nonTake = dp[i-1]
    //     dp[i] = Math.max(take, nonTake)
    // }
    // return dp[index]

    // SC optimized
    let prev = nums[0];
    let prev2 = 0;
    for (let i = 1; i < nums.length; i++) {
        let take = nums[i];
        if (i > 1) take += prev2
        let nonTake = prev1
        let curri = Math.max(take, nonTake);
        prev2 = prev;
        prev = curri
    }
    return prev;
}

var rob = function (nums) {
    const n = nums.length;
    if (n === 0) return 0;
    const dp = Array(n).fill(-1);
    return fun(nums, n - 1, dp)
};