/**
 * 对象也可以手动实现迭代器功能
 */

const countToThree = {
  a: 1,
  b: 2,
  c: 3
};

// 实现类似数组的 for ... of 循环功能
countToThree[Symbol.iterator] = function* () {
  const keys = Object.keys(this);
  const length = keys.length;

  for (const key in this) {
    yield this[key];
  }
};

let [...three] = countToThree;
console.log(three); // [ 1, 2, 3 ]


for (let v of countToThree) {
	console.log(v)
}

// 1
// 2
// 3