/*
* 继承是指一个构造函数继承另一个构造函数（es5）
* */
// function Super() {
//     this.age = 28;
// }
//
// Super.prototype.getNumber = function () {
//     return 1
// }
//
// function Sub() {
//     this.age = 29;
// }
//
// Sub.prototype = Object.create(Super.prototype, {
//     constructor: {
//         value: Sub,
//         enumerable: false,
//         writable: true,
//         configurable: true
//     }
// })
//
// let s = new Sub()
// debugger


/*
* 继承是指一个构造函数继承另一个构造函数（es5）
* */
// function Super() {}
// Super.prototype.getNumber = function() {
//     return 1
// }
//
// function Sub() {}
// Sub.prototype.__proto__=Super.prototype;
// let s = new Sub();
// console.log(s);


/*
* 继承是指一个构造函数继承另一个构造函数（es5）
* */
function Super() {
    this.age=28;
    this.getAge=function () {
        console.log(28)
    }
}
Super.prototype.getNumber = function() {
    return 1
}

function Sub(...ars) {
    this.age=29;//说明来，通过apply/call来实现继承，是看apply和call写在子构造函数的属性下面还是上面，写在下面，会覆盖子构造函数的自有属性
    Super.apply(this,arguments);//只是实现了属性的继承，通过把父构造函数，当作普通的函数调用来做到的
    // Super.call(this,...ars);   //call方法的传参方式;

    this.getAge=function () {//会对父构造函数的getAge方法进行覆盖
        console.log(29)
    }
}

let s = new Sub();
console.log(s.age);
debugger
s.getAge();
debugger
console.log(s);
