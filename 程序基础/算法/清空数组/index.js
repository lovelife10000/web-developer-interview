//方式一 通过将长度设置为0
var arr=[1,2,3,4,5];
arr.length=0;

//方式二 通过splice方法
var arr=[1,2,3,4,5];
arr.splice(0,arr.length);

//方式三 通过将空数组 [] 赋值给数组(严格意义来说这只是将ary重新赋值为空数组，之前的数组如果没有引用在指向它将等待垃圾回收。)
var arr=[1,2,3,4,5];
arr=[];