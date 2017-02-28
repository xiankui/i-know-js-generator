/**
 * 生成器调用next函数时，执行生成器函数代码
 */

const generatorFunction = function* () {
    console.log('a');
};

console.log(1);
const generator = generatorFunction();
console.log(2);
generator.next();
console.log(3);


// 1
// 2
// a
// 3