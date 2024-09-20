// DP with memoization
// Time Complexity: 𝑂(𝑛)
// O(n) (because each Fibonacci number is computed once)
// Space Complexity: 𝑂(𝑛) + 𝑂(𝑛) = 2 𝑂(𝑛) ~= 𝑂(𝑛);
// O(n) (for both the memo array and the recursion stack)
function fib_memo (n, memo = []) {
    if (memo[n] !== undefined) return memo[n]
    if (n <= 1) {
        return n;
    }
    const res = fib(n - 1) + fib(n - 2);
    memo[n] = res;
    return res;
}
// console.log(fib_memo(5));
// Dp with Tabulation
// Time Complexity: 𝑂(𝑛)
// O(n) (because each Fibonacci number is computed once)
// Space Complexity: 𝑂(𝑛)
// O(n) (for storing the Fibonacci numbers in an array)
function fib_table (n) {
    if (n <= 1) {
        return n;
    }
    const fibNums = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
    }
    return fibNums[n];
};
fib_table(5);

// Time Complexity: O(n)
// Loop runs n-1 times
// Space Complexity: O(1)
// Only a constant amount of space is used for variables, regardless of the input size.
function fib_optimized (n) {
    if (n <= 1) {
        return n;
    }
    let prev2 = 0, prev1 = 1;
    for (let i = 2; i <= n; i++) {
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
}
