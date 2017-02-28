/**
 * yield 也能从迭代器中接收一个值
 * 没有 yield 表达式接受第一次的传值，第一次的传值被丢弃
 * yield 默认返回 undefined
 * 函数的默认返回值也是 undefined
 */

const generatorFunction = function* () {
    console.log(yield);  // yield undefined;
    // return undefined;  // 
};
 
const iterator = generatorFunction();

var g;
 
g = iterator.next('foo');
console.log(g)

g = iterator.next('bar');  // 'bar' 被yield接收
console.log(g)


// { value: undefined, done: false }
// bar
// { value: undefined, done: true }