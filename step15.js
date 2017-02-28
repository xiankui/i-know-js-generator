/**
 * 用生成器来解决回调问题 * thunkify + generator
 */

// callback last!
const foo = (name, callback) => {
	setTimeout(() => {
		callback(name)
	}, 100)
}

/**
 * Transforms a function that takes multiple arguments into a
 * function that takes just the last argument of the original function.
 *
 * @param {Function}
 * @param {...*}
 */
const curry = (method, ...args) => {
    return (callback) => {
        args.push(callback);

        return method.apply({}, args);
    };
};

const generatorFunction = function *() {
	var a = yield curry(foo, 'a');
	var b = yield curry(foo, 'b');
	var c = yield curry(foo, 'c');

	console.log(a, b, c)
}

const iterator = generatorFunction();

iterator.next().value(val => {
	iterator.next(val).value(val => {
		iterator.next(val).value(val => {
			iterator.next(val)
		})
	})
})


// a b c