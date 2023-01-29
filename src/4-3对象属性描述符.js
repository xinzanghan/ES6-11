// const obj = {
//   name: "imooc",
//   course: "es",
// };
// const desc = Object.getOwnPropertyDescriptors(obj);
// console.log(desc); //自带四个属性

// 如何设置这四个属性
const obj = {};
// // Es5 给对象里设置定义一个属性
// Object.defineProperty();

//es6  Reflect
Reflect.defineProperty(obj, "name", {
  value: "wangyihan",
  writable: true, //是否可修改
  configurable: false, //当前对象的属性能否通过delete删掉
  enumerable: false, //能够通过for...in...将对象属性循环出来
});
Reflect.defineProperty(obj, "age", {
  value: 23,
  writable: true,
  configurable: false,
  enumerable: true,
});
// console.log(obj);
// obj.name = "zhangsan";
// console.log(obj); //writable: false 此值并未改变
// delete obj.name;
// console.log(obj); //configurable: false 删不掉
for (let key in obj) {
  console.log(key); //enumerable: false 打印不出来
}

console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.getOwnPropertyDescriptor(obj, "age"));
