const a = {
    a: 'a'
};
const b = {
    b: 'b'
};
const c = {...a, ...b}; // {a: 'a', b: 'b'}




/*
* 将两个类合成进一个新类里面
* */
function mix(...mixins) {
    class Mix {
        constructor() {
            for (let mixin of mixins) {
                copyProperties(this, new mixin()); // 拷贝实例属性
            }
        }
    }

    for (let mixin of mixins) {
        copyProperties(Mix, mixin); // 拷贝静态属性
        copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
    }

    return Mix;
}

function copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if ( key !== 'constructor'
            && key !== 'prototype'
            && key !== 'name'
        ) {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}



class DistributedEdit extends mix(Loggable, Serializable) {
    // ...
}