/**
 * 错误捕捉
 * Any data type can be thrown, including functions, numbers, arrays and objects.
 */
const generatorFunction = function *() {
	while (true) {
    try {
      yield;
    } catch (e) { // 捕捉生成器抛出的错误
      if (e != 'a') {
        throw e;  // 再次抛出错误时，被外层捕捉器捕捉
      }
      console.log('Generator caught', e);
    }
  }
}

const iterator = generatorFunction();

iterator.next();


try {
	iterator.throw('a');  // 抛出错误，被生成器函数的错误捕捉器捕捉；如果生成器函数没有捕捉，则流入catch
	iterator.throw('b');  // 生成器函数捕捉后再次抛出错误，被本捕捉器捕捉，流入catch
} catch (err) {
	console.log('Uncaught', err)
}


// Generator caught a
// Uncaught b