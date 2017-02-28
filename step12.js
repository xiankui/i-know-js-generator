/**
 * 执行委托
 * The yield*operator delegates to another generator.
 */

let index;
 
const foo = function* () {
    yield 'foo';
    yield * bar();
};
 
const bar = function* () {
    yield 'bar';
    yield * baz();
};
 
const baz = function* () {
    yield 'baz';
};
 

/** 
 * Delegating a generator to another generator is in effect the same as importing the body of the target generator to the destination generator.
 * the same as this
 */
const foo2 = function* () {
    yield 'foo';
    yield 'bar';
    yield 'baz';
};


for (index of foo()) {
    console.log(index);
}


// foo
// bar
// baz



// 数组的执行委托，为数组增加next迭代方法
const arr = [1, 3, 5];

console.log(Object.prototype.toString.call(arr))
console.log(Object.prototype.toString.call(arr[Symbol.iterator]))
console.log(arr.next)

// [object Array]
// [object Function]
// undefined

const delegate = function *() {
	yield *arr;
}

// the same as 
const delegate2 = function *() {
	yield 1;
	yield 2;
	yield 3;
}

var g = delegate();

console.log(Object.prototype.toString.call(g))
console.log(g.next())

// [object Generator]
// { value: 1, done: false }


// 数组的执行委托，为数组增加next迭代方法 内置版
const iterator_arr = arr[Symbol.iterator]();

console.log(Object.prototype.toString.call(iterator_arr))
console.log(iterator_arr.next())

// [object Array Iterator]
// { value: 1, done: false }
