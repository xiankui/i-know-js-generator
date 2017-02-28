/**
 * 普通对象实现迭代器
 */
var obj = (function () {
	var nextVal = 0;

	return {
		// for..of循环需要
		[Symbol.iterator]: function () {
			return this;
		},

		// 标准迭代器接口方法
		next: function () {
			return {
				value: nextVal++,
				done: false
			}
		}
	}
})()

console.log(Object.prototype.toString.call(obj));  // [object Object]


console.log(obj.next().value)
console.log(obj.next().value)

// 0
// 1

var arr = [];
for (let v of obj) {
	if (v > 10) break;
	arr.push(v)
}

console.log(arr)

// [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


////////////////////////////////////////////////////
// 生成器版
var gen = function *() {
	let nextVal = 0;
	while (true) {
		yield nextVal++;
	}
}


var g = gen();




