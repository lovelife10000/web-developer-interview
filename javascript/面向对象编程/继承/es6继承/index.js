class Super {


    b(){}
}


class Sub extends Super{

}

console.dir(Sub);
debugger








function Super2() {

}

Super2.prototype.a=function () {

}

function Sub2() {
    Super2.apply(this,arguments)
}

Sub2.prototype=Object.create(Super2.prototype)
Sub2.prototype.constructor=Sub2

console.dir(Sub2);
debugger