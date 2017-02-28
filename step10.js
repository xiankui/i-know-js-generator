/**
 * Understanding the Execution Flow
 * yield 像是一个有 return 功能的占位符，能够接收下次迭代时的传值；第一次迭代时没有yield占位符，不接受传值；
 * 迭代器每运行一次就【return】一次
 * 在生成器函数运行时：
 * 		yield == return && yield !== return
 */
var foo, f;
 
foo = function *() {
	console.log('debug generatorFunction ---- generator 1')
	console.log('debug generatorFunction ---- yield 1', yield 'A')
	console.log('debug generatorFunction ---- generator 2')
	console.log('debug generatorFunction ---- yield 2', yield 'B')
	console.log('debug generatorFunction ---- generator 3')
}

f = foo();

console.log('tick1')
console.log(f.next('firstReceive'));  // 第一次迭代时会返回yield value 或 return value，却没有yield expression 接受传值
console.log('tick2')
console.log(f.next('secondReceive'))
console.log('tick3')
console.log(f.next('thirdReceive'))
console.log('tick4')
console.log(f.next('forthReceive'))
console.log('tick5')
console.log(f.next('fifthReceive'))



// tick1
// debug generatorFunction ---- generator 1
// { value: 'A', done: false }
// tick2
// debug generatorFunction ---- yield 1 secondReceive
// debug generatorFunction ---- generator 2
// { value: 'B', done: false }
// tick3
// debug generatorFunction ---- yield 2 thirdReceive
// debug generatorFunction ---- generator 3
// { value: undefined, done: true }
// tick4
// { value: undefined, done: true }
// tick5
// { value: undefined, done: true }
