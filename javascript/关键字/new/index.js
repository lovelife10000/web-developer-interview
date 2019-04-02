
/*
* 1.将构造函数中的this.属性拷贝给这个实例对象
* 2.给这个实例对象，添加属性__proto__，指向构造函数的原型
* */
function Bar() {
    this.bar = 42;
}
Bar.prototype=function b() {

}
const bar = new Bar();
console.dir(bar);




