// let iterable = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     length: 3,
//     [Symbol.iterator]: Array.prototype[Symbol.iterator]
// };
// for (let item of iterable) {
//     console.log(item); // 'a', 'b', 'c'
// }
// let  a=iterable[Symbol.iterator]();
// let b=a.next();
// let c=a.next();
// debugger



//
// let iterable = {
//     a: 'a',
//     b: 'b',
//     c: 'c',
//     length: 3,
//     [Symbol.iterator]: Array.prototype[Symbol.iterator]
// };
// for (let item of iterable) {
//     console.log(item); // undefined, undefined, undefined
// }




// var obj = {};
//
// obj[Symbol.iterator] = () => 1;
//
// [...obj] // TypeError: [] is not a function




// let generator = function* () {
//     yield 1;
//     yield* [2,3,4];
//     yield 5;
// };
//
// var iterator = generator();
//
// iterator.next() // { value: 1, done: false }
// iterator.next() // { value: 2, done: false }
// iterator.next() // { value: 3, done: false }
// iterator.next() // { value: 4, done: false }
// iterator.next() // { value: 5, done: false }
// iterator.next() // { value: undefined, done: true }





// var someString = "hi";
// typeof someString[Symbol.iterator]
// // "function"
//
// var iterator = someString[Symbol.iterator]();
//
// iterator.next()  // { value: "h", done: false }
// iterator.next()  // { value: "i", done: false }
// iterator.next()  // { value: undefined, done: true }



// Symbol.iterator方法的最简单实现，还是使用下一章要介绍的 Generator 函数。
// let myIterable = {
//     [Symbol.iterator]: function* () {
//         yield 1;
//         yield 2;
//         yield 3;
//     }
// }
//     [...myIterable] // [1, 2, 3]
//
// // 或者采用下面的简洁写法
//
// let obj = {
//     * [Symbol.iterator]() {
//         yield 'hello';
//         yield 'world';
//     }
// };
//
// for (let x of obj) {
//     console.log(x);
// }
// // "hello"
// // "world"



// // DOM NodeList对象
// let paras = document.querySelectorAll("p");
//
// for (let p of paras) {
//     p.classList.add("test");
// }


// arguments对象
function printArgs() {
    for (let x of arguments) {
        console.log(x);
    }
}
printArgs('a', 'b');
// 'a'
// 'b'