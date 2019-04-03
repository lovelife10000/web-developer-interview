/*
* 给类添加静态属性
* */
@testable
class MyTestableClass {
    // ...
}

function testable(target) {
    target.isTestable = true;
}

MyTestableClass.isTestable // true







/*
* 包装一下，多传一个参数
* */
function testable(isTestable) {
    return function(target) {
        target.isTestable = isTestable;
    }
}

@testable(true)
class MyTestableClass {}
MyTestableClass.isTestable // true

@testable(false)
class MyClass {}
MyClass.isTestable // false




/*
* 修饰器不仅可以修饰类，还可以修饰类的属性。
* */
class Person {
    @readonly
    name() { return `${this.first} ${this.last}` }
}