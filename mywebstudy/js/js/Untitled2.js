document.write(123+"<br/>");
document.write(123);
var arr=new Array('white','pueple','yellow','black');
arr.push('blue');//.push用来给数据库arr末尾添加数据，改变源数据库内容
console.log（arr）;
//输出结果为arr=['white','pueple','yellow','black','blue'];
arr.pop('blue')//删除arr数据库中末尾的blue，
console.log(arr)
//输出结果为arr=['white','pueple','yellow','black'];
arr.unshift('red');//在arr数组中最前面添加red元素，改变源数组数据，并且改变源数组索引
//输出结果为arr=['red','white','pueple','yellow','black'];
arr.shift('red');//在arr数组中删除第一个元素，改变源数组的索引和数据
//输出结果为arr=['white','pueple','yellow','black'];
var arr2=arr.shlic(2,3)//从源数组中截取冲三个到第5之前的元素；
console.log(arr2)
//结果为arr=['white','pueple','yellow','black'];arr2=['pueple','yellow']