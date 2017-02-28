/**
 * 有缓存功能的斐波那契数列
 */

const memo = [];

const fib = (n) => {
  if (memo[n] !== undefined) return memo[n];

  let current = 0;
  let next = 1;

  for (let i = 0; i < n; i++) {
    memo[i] = current;
    [current, next] = [next, current + next];
  }

  return current;
};

// 对数组以生成器的方式返回
function* gen (n = 79) {
  fib(n);
  yield* memo.slice(0, n + 1);
}

var g = gen();

var f = g.next();

console.log(f)

// { value: 0, done: false }