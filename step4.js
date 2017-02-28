/**
 * 当生成器调用next方法，执行生成器函数并返回生成器（迭代器）的进度
 * value * 迭代器的值
 * done * 迭代器的状态，是否完成迭代？
 */

const generatorFunction = function* () {};
const generator = generatorFunction();
 
console.log(generator.next());

// { value: undefined, done: true }