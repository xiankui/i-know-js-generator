/**
 * yield关键字会把值传回迭代器
 */

var generatorFunction = function* () {
    yield 'foo';
};

var iterator = generatorFunction();
 
console.log(iterator.next());
console.log(iterator.next());
 
// Object {value: "foo", done: false}
// Object {value: undefined, done: true}



