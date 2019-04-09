/*
* 继承是指一个构造函数继承另一个构造函数（es5）
* */
function Super() {
    this.age = 28;
}

Super.prototype.getNumber = function () {
    return 1
}

function Sub(...ars) {
    // this.age = 29;
    // Super.apply(this, arguments);
    Super.call(this,...ars);//如果Super是原生构造函数，那么原生构造函数的内部属性是无法绑定到实例上去的
}

Sub.prototype = Object.create(Super.prototype, {
    constructor: {
        value: Sub,
        enumerable: false,
        writable: true,
        configurable: true
    }
})
// Sub.prototype.__proto__=Super.prototype;

let s = new Sub()
console.log(s.age);//29
debugger









/*
*之所以会发生这种情况，是因为子类无法获得原生构造函数的内部属性，通过Array.apply()或者分配给原型对象都不行。原生构造函数会忽略apply方法传入的this，也就是说，原生构造函数的this无法绑定，导致拿不到内部属性。
* */
// function MyArray() {
//     Array.apply(this, arguments);
// }
//
// MyArray.prototype = Object.create(Array.prototype, {
//     constructor: {
//         value: MyArray,
//         writable: true,
//         configurable: true,
//         enumerable: true
//     }
// });
//
// var colors = new MyArray();
// colors[0] = "red";
// colors.length  // 0
//
// colors.length = 0;
// colors[0]  // "red"
