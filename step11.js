/**
 * 生成器实现了迭代器的[Symbol.iterator]方法，所以可以for .. of循环
 * The iteration will continue as long as done property is false.
 * The for..of loop cannot be used in cases where you need to pass in values to the generator steps.
 * The for..of loop will throw away the return value.
 */

let index;
 
const generatorFunction = function* () {
    yield 1;
    yield 2;
    yield 3;
    return 4;
};

const iterator = generatorFunction();

for (index of iterator) {
    console.log(index);
}

// 1
// 2
// 3

console.log('*****************************')

const [...arr] = generatorFunction();

console.log(arr)

// [ 1, 2, 3 ]

console.log('*****************************')

const g = generatorFunction();

console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())

// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: true }
// { value: undefined, done: true }