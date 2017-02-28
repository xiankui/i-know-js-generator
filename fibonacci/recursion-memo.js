/**
 * 有缓存功能的递归
 */

var memo = [];

function fib(n) {
	if (memo[n] !== undefined) return memo[n];

	let current = 0;
	let next = 1;

	for (let i = 0; i < n; i++) {
		memo[i] = current;
		
		[current, next] = [next, current + next];
	}

	return current;
}

var f = fib(10);

console.log(f)

// 55