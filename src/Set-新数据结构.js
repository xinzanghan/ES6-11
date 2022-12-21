// let s = new Set();
// console.log(s);

//Set里面的值都是唯一的
// let s = new Set([1, 2, 3, 2]);
// // s.add("imooc"); //可链式添加
// s.add("imooc").add("es");
// s.delete("imooc");
// // s.clear();
// console.log(s.has("es")); //是否包含某值 true
// console.log(s);
// console.log(s.size); //4

//
//
//
//
// Set遍历
// forEach
// s.forEach((item) => console.log(item));

//
// //for of  Set的key和value一样
// for (let item of s) {
//   console.log(item);
// }
// for (let item of s.keys()) {
//   console.log(item);
// }
// for (let item of s.values()) {
//   console.log(item);
// }
// for (let item of s.entries()) {
//   console.log(item);
// }

//
//
//
//
//
//
// Set的应用场景
// 1.数组去重
// let arr = [1, 2, 3, 2, 4];
// let s = new Set(arr);
// console.log(s);

//2.数组合并去重
// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 5, 6];
// // let s = new Set([...arr1, ...arr2]);
// // console.log(s);
// // // 需求：输出数组，不要Set（）
// // console.log([...s]);
// // console.log(Array.from(s));

// // // 上面两数组 求交集
// // let s1 = new Set(arr1);
// // let s2 = new Set(arr2);
// // let result = new Set(arr1.filter((item) => s2.has(item)));
// // console.log(result);//{2,3,4}

// //上面两数组 求差集
// let s1 = new Set(arr1);
// let s2 = new Set(arr2);

// let arr3 = new Set(arr1.filter((item) => !s2.has(item)));
// let arr4 = new Set(arr2.filter((item) => !s1.has(item)));
// console.log([...arr3, ...arr4]); // [1, 5, 6]

//
//
//
//
//
// WeakSet 只能存储对象
let ws = new WeakSet();
// ws.add(1); //报错
const obj1 = {
  name: "imooc",
};
const obj2 = {
  age: 5,
};
ws.add(obj1);
ws.add(obj2);
// ws.delete(obj1); //添加和删除的必须是同一个对象
// console.log(ws);
// console.log(ws.has(obj2)); //true

//WeakSet 弱引用 不能遍历
// ws.forEach((item) => console.log(item));

//
//
//
//
//
// WeakSet和Set的区别
// 1.WeakSet只能存储对象，Set 对象数组都可以
// 2.WeakSet不能遍历，Set可以遍历
// 3.WeakSet弱引用，没有垃圾回收机制
