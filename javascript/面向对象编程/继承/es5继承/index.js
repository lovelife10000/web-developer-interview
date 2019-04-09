/*
* 借用构造函数-原型式继承
* */
// function Super() {
//     this.age = 28;
// }
//
// Super.prototype.getNumber = function () {
//     return 1
// }
//
// function Sub(...ars) {
//     // this.age = 29;
//     // Super.apply(this, arguments);//借用构造函数继承
//     Super.call(this, ...ars);//如果Super是原生构造函数，那么原生构造函数的内部属性是无法绑定到实例上去的//借用构造函数继承
// }
//
// Sub.prototype = Object.create(Super.prototype, {//原型式继承
//     constructor: {
//         value: Sub,
//         enumerable: false,
//         writable: true,
//         configurable: true
//     }
// })
// // Sub.prototype.__proto__=Super.prototype;//非标准手段原型式继承
//
// let s = new Sub()
// console.log(s.age);//29
// debugger


/*
* 借用构造函数-组合式（实例化父构造函数式）继承
* */
// function Super() {
//     this.age = 28;
//     this.name='li'
// }
//
// Super.prototype.getNumber = function () {
//     return 1
// }
//
// function Sub(...ars) {
//     // Super.apply(this, arguments);//借用构造函数继承
//     Super.call(this, ...ars);//如果Super是原生构造函数，那么原生构造函数的内部属性是无法绑定到实例上去的//借用构造函数继承
//     this.age = 29;
//
// }
//
// Sub.prototype = new Super();//直接等于Super实例，包含__proto__,但包含类多余的属性name
// Sub.prototype.constructor = Sub;//指回来，保持和Sub的关系
//
// let s = new Sub();
// console.log(s.age);//29
// debugger




/*
* 借用构造函数-寄生组合式继承
* */
function Super() {
    this.age = 28;
    this.name='li'
}

Super.prototype.getNumber = function () {
    return 1
}

function Sub(...ars) {
    // Super.apply(this, arguments);//借用构造函数继承
    Super.call(this, ...ars);//如果Super是原生构造函数，那么原生构造函数的内部属性是无法绑定到实例上去的//借用构造函数继承
    this.age = 29;

}

function inhert(sub,sup){
    let obj=Object.assign({},sup.prototype);
    sub.prototype=obj;
    sub.prototype.constructor=sub;
}
inhert(Sub,Super)
let s = new Sub();
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
