/*
* 会忽略 undefined
会忽略 symbol
不能序列化函数
不能解决循环引用的对象
* */
JSON.parse(JSON.stringify(object))


lodash