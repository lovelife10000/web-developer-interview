document.getElementById('root').addEventListener('click',function (e) {
    // e.stopPropagation();
    // e.stopImmediatePropagation();
    console.log('冒泡，这里产生了特例，也就是说，实际事件发生的元素身上，如果同时绑定了捕获和冒泡事件，哪个代码写在前面，哪个就先执行，这个时候已经不按照先捕获后冒泡的规则了');
},false)
document.getElementById('root').addEventListener('click',function (e) {
    // e.stopPropagation();
    console.log('捕获，这里产生了特例，也就是说，实际事件发生的元素身上，如果同时绑定了捕获和冒泡事件，哪个代码写在前面，哪个就先执行，这个时候已经不按照先捕获后冒泡的规则了');
},true)

window.addEventListener('click',function () {
    console.log('window冒泡');
},false)
window.addEventListener('click',function () {
    console.log('window捕获');
},true)
document.getElementById('rootf').addEventListener('click',function () {
    console.log('冒泡f');
},false)
document.getElementById('rootf').addEventListener('click',function () {
    console.log('捕获f');
},true)
