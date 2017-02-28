/**
 * 用生成器表达斐波那契数列
 */

function *fib(n, current = 0, next = 1) {
	if (n === 0) return 0;

	yield current;

	yield *fib(n - 1, next, current + next)
}	