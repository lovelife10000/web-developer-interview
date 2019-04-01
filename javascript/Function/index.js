

/*
* 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
* */
// (function (a) {}).length // 1
// (function (a = 5) {}).length // 0
// (function (a, b, c = 5) {}).length // 2


let a=new Function('jj');
console.dir(a);

console.dir(Function)
//Function是最底层的一个构造函数