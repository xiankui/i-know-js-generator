
/**
 * 生成器函数调用时，生成生成器；但不执行函数代码
 */

const generatorFunction = function* () {
    // This does not get executed.
    console.log('a');
};

console.log(1);
const generator = generatorFunction();
console.log(2);


// 1
// 2