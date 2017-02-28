/**
 * 递归 * this is a fucking way
 */
function fib(n) {
	if (n < 2) return n;

	console.log('----', n)
	return fib(n-1) + fib(n-2)
}

fib(10)