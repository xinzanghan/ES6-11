// let name = "wnagyihan";
// let age = 24;
// let s = "school";

// let obj = {
//   name, //属性简洁表示法
//   age: age,
//   [s]: "imooc", // key值为变量时，写法：[key]
//   // 在定义对象obj中的函数方法时，不要使用箭头函数 报错
//   study: () => {
//     console.log(this.name + "正在学习");
//   },
//   //   ES6函数简写
//   study() {
//     console.log(this.name + "正在学习");
//   },
// };
// console.log(obj);
// obj.study();

// console.log(Object.is(2, "2"));//false
// console.log(Object.is(NaN, NaN));

// 二

// let obj1 = {
//   //new Object会在堆内存中有一个新内存空间
//   name: "wangyihan",
//   age: 24,
// };
// let obj2 = {
//   //new Object
//   name: "wangyihan",
//   age: 24,
// };
// console.log(Object.is(obj1, obj2)); //false

// let obj2 = obj1;
// console.log(Object.is(obj1, obj2)); //true

// 三 对象的扩展运算符 合并对象

// let x = {
//   a: 1,
//   b: 2,
// };

// // let y = { ...x };

// // let y = {};
// // Object.assign(y, x); //(目标对象，源对象)把x合并到y

// let y = {
//   c: 3, //{c: 3, a: 1, b: 2}
//   a: 4, //{c: 3, a: 1, b: 2} x中的a值将y中的a值覆盖掉
// };
// // Object.assign(y, x);
// // console.log(y);
// console.log("a" in x); //true

// in 用在数组上
// let arr = [1, 2, 3];
// console.log(3 in arr); //数组下标位置 是否有值

// // 对象的遍历
// let obj = {
//   name: "wangyihan",
//   age: 24,
//   school: "imooc",
// };

//此方法不会返回Symbol()类型的键名
// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// 此方法不会返回Symbol()类型的键名
// Object.keys(obj).forEach((key) => {
//   console.log(key, obj[key]);
// });

// 此方法不会返回Symbol()类型的键名
// Object.getOwnPropertyNames(obj).forEach((key) => {
//   console.log(key, obj[key]);
// });

//
//
// Reflect.ownKeys(obj).forEach((key) => {
//   console.log(key, obj[key]);
// });
