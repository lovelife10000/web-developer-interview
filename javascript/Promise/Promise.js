let promise = new Promise(function (resolve, reject) {

    resolve('666');
    // reject('777')//如果这个函数的参数是另一个promise实例，只有等到该promise状态为resolved或者rejected才会开始执行该reject函数
    debugger
    console.log('这里还会执行，即使前面已经状态改为rejected或者resolved')
});

promise.finally(function () {
    console.log('这里表示不管状态变成啥，都会执行');
    console.log('finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。');
    debugger
}).then(function (result) {
    console.log(result);
    debugger
    return 888
}).then(function (result) {
    debugger
    throw ('虽然promise状态已经变成resolved,但是这里发生错误，catch也能捕捉到')
    debugger
    console.log(result);
}).then(null,function (err){
    console.log('这样then函数也能代替catch,这样一来后面的catch就不执行了')
    y+2
    debugger
}).catch(function (err) {
    debugger
    console.log(err);

}).finally(function () {
    console.log('这里表示不管状态变成啥，都会执行');
    console.log('finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。');
    debugger
});


Promise.all();
Promise.race();
Promise.resolve();
const jsPromise = Promise.resolve($.ajax('/whatever.json'));



Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))



Promise.reject()

Promise.try()

//resolve和reject在函数最后执行，所以一般加上return resolve()
//建议采用链式写法，不然会报错 ，reject写在最后
//resolve和reject都是放到队列尾部去执行，也就是所有同步代码都执行完毕后再执行这个代码



