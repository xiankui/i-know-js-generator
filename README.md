# Generator 

## 到底什么是生成器函数

* 一种函数 function *() {}
* 可分段执行的函数 [object GeneratorFunction]
* yield 像是有 return 功能的占位符；可使函数暂时挂起并返回，同时可接受下次迭代时的传值

## 什么是生成器

* 一种迭代器
* 实现了迭代器的 [Symbol.iterator] 及 next 方法
* 生成器函数调用产生的对象 [object Generator]
* 调用next方法进行内部迭代，从而控制生成器函数的分段执行

## 迭代器的种类

* 数组是内建的迭代器，实现了[Symbol.iterator]方法，可进行for ... of循环
* 生成器，同时具有[Symbol.iterator]和next方法
* 任意对象可手动实现标准的迭代器接口：[Symbol.iterator]和next方法

## 参考文案

* [the-definitive-guide-to-generator](http://gajus.com/blog/2/the-definitive-guide-to-the-javascript-generators)
* [fibonacci-generator](https://medium.com/javascript-scene/7-surprising-things-i-learned-writing-a-fibonacci-generator-4886a5c87710#.ro01gjhe8)


~~给你个眼神，自己体会~~

```
	$node step1.js
	$node step2.js
	...
```