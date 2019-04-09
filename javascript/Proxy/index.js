// var obj = new Proxy({}, {
//     get: function (target, key, receiver) {
//         debugger
//         console.log(`getting ${key}!`);
//         return Reflect.get(target, key, receiver);
//     },
//     set: function (target, key, value, receiver) {
//         debugger
//         console.log(`setting ${key}!`);
//         return Reflect.set(target, key, value, receiver);
//     }
// });
//
// console.log(obj.count=1);
// debugger


// var proxy = new Proxy({}, {
//     get: function(target, property) {
//         return 35;
//     }
// });
//
// proxy.time // 35
// proxy.name // 35
// proxy.title // 35




// var proxy = new Proxy({}, {
//     get: function(target, property) {
//         return 35;
//     }
// });
//
// let obj = Object.create(proxy);
// obj.time // 35



// var handler = {
//     get: function(target, name) {
//         debugger
//         if (name === 'prototype') {
//             return Object.prototype;
//         }
//         return 'Hello, ' + name;
//     },
//
//     apply: function(target, thisBinding, args) {
//         debugger
//         return args[0];
//     },
//
//     construct: function(target, args) {
//         debugger
//         return {value: args[1]};
//     }
// };
//
// var fproxy = new Proxy(function(x, y) {
//     return x + y;
// }, handler);
//
// fproxy(1, 2) // 1
// debugger
// new fproxy(1, 2) // {value: 2}
// debugger
// fproxy.prototype === Object.prototype // true
// debugger
// fproxy.foo === "Hello, foo" // true
// debugger





const target = {
    m: function () {
        console.log(this === proxy);
        debugger
    }
};
const handler = {};

const proxy = new Proxy(target, handler);

target.m() // false
debugger
proxy.m()  // true
debugger