/**
 * 当生成器函数执行时遇到 yield ，函数挂起，控制权交给生成器（迭代器）
 */

const generatorFunction = function* () {
    yield;
};
const iterator = generatorFunction();
 
console.log(iterator.next());
console.log(iterator.next());
 
// Object {value: undefined, done: false}
// Object {value: undefined, done: true}