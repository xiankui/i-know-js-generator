/**
 * 生成器函数 * 一种特殊的函数
 * 生成器 * 实现了迭代器功能的，由生成器函数调用时生成的对象；一种迭代器
 */

const generatorFunction = function* () {};
const generator = generatorFunction();

console.log(Object.prototype.toString.call(generatorFunction))
console.log(Object.prototype.toString.call(generator))
console.log(Object.prototype.toString.call(generator[Symbol.iterator]))
console.log(generator[Symbol.iterator]);
console.log(function () {})

// [object GeneratorFunction]
// [object Generator]
// [object Function]
// [Function: [Symbol.iterator]]
// [Function]