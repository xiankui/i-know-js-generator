/**
 * 无限数列
 */

function *fib(n) {
	const isInfinite = n === undefined;

	let current = 0;
	let next = 1;

	while (isInfinite || n--) {
		yield current;

		[current, next] = [next, current + next]
	}
}

var [...seq] = fib(10)