/**
 * 数组是内建的生成器，实现了 [Symbol.iterator] ，可进行 for ... of 迭代
 */

const a = [1, 2, 3];
const b = [4, 5, 6];

function* c () {
  yield 7;
  yield 8;
  yield 9;
}

function* gen () {
  yield* a;
  yield* b;
  yield* c();
  yield 10;
}

const [...sequence] = gen();
console.log(sequence); // [1,2,3,4,5,6,7,8,9,10]


// arr[Symbol.iterator](), 开启next迭代功能
let arr = [1,2,3];
let foo = arr[Symbol.iterator]();

arr.forEach(() => console.log( foo.next() ));

// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }


console.log(Object.prototype.toString.call(arr))
console.log(Object.prototype.toString.call(foo))

// [object Array]
// [object Array Iterator]