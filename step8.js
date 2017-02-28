/**
 * yield关键字会把任何类型的值传回迭代器
 * 函数运行到最后，会把return的值传回去
 */
const generatorFunction = function *() {
	yield {'foo': 'bar'};

	yield function() {};

	return 'end';
}

const iterator = generatorFunction();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// { value: { foo: 'bar' }, done: false }
// { value: [Function], done: false }
// { value: 'end', done: true }
