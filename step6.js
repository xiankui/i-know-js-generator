/**
 * 当生成器函数挂起时，不会阻塞执行队列
 */

const generatorFunction = function* () {
    var i = 0;
    while (true) {
        yield i++;
    }
};
 
const iterator = generatorFunction();
 
console.log('hello---------')
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log('world---------')
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log('end-----------')

// hello---------
// { value: 0, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
// world---------
// { value: 3, done: false }
// { value: 4, done: false }
// { value: 5, done: false }
// end-----------