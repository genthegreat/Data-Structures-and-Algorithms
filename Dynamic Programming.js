// Fibonacci Sequence
function fib_memo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

// Fibonacci Sequence tabulated
function fib_table(num) {
  if (num <= 2) return 1;
  let table = [0, 1, 1];
  for (let i = 3; i <= num; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[num];
}
