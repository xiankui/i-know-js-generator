

/**
 * 生成器可以用来解决什么问题呢？回调地狱！
 */

const foo = (name, callback) => {
  setTimeout(() => {
    callback(name);
  }, 100);
};

foo('a', (a) => {
	foo('b', (b) => {
		foo('c', (c) => {
			console.log(a, b, c)
		})
	})
})

// a b c