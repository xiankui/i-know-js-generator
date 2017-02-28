/**
 * 用生成器解决回调问题 * thunkify + generator + controller
 */
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

/**
 * Initiates a generator and iterates through each function supplied
 * via the yield operator.
 * 
 * @param {Function}
 */
const controller = (generator) => {
    const iterator = generator();
 
    const advancer = (response) => {
        // Advance the iterator using the response of an asynchronous callback.
        const state = iterator.next(response);
 
        if (!state.done) {
            // Make the asynchronous function call the advancer.
            state.value(advancer);
        }
    }
 
    advancer();
};

const generatorFunction = function *() {
	var a = yield curry(foo, 'a');
	var b = yield curry(foo, 'b');
	var c = yield curry(foo, 'c');

	console.log(a, b, c)
}


controller(generatorFunction)



// a b c






