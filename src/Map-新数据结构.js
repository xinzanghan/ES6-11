// Map 键值对的方式，但比对象更加强大的是:key值可以设置不同类型 object string...
// let m = new Map();
// let obj = {
//   name: "imooc",
// };
// // 设置值
// m.set(obj, "es");
// // // 获取
// // console.log(m.get(obj));
// // // 删除
// // m.delete(obj);
// // 含有
// console.log(m.has(obj));
// console.log(m);

let map = new Map([
  ["name", "imooc"], //每个数组是Map的一个成员
  ["age", 5],
]);
// console.log(map);
// console.log(map.size); //2
// console.log(map.has("name")); //true
// console.log(map.get("age")); //5
// map.set("name", "zhangsan");
// map.delete("name");
// console.log(map); //'name' => 'zhangsan' 后值覆盖

//

//
//
// Map遍历
//forEach
// value, key
// map.forEach((value, key) => console.log(value, key));

//
// for in
// key, value
// for (let [key, value] of map) {
//   console.log(key, value);
// }

//
// keys()
// for (let key of map.keys()) {
//   console.log(key);
// }

//
//values()
// for (let value of map.values()) {
//   console.log(value);
// }

//
//entries
// for (let [key, value] of map.entries()) {
//   console.log(key, value);
// }

//
//
//
//
//Map 应用场景与 Object 大致相同

//
//
//
//
//
// WeakMap与Map结构相似，
// 但WeakMap的键名只支持引用数据类型（数组，对象，方法）
let wm = new WeakMap();
wm.set([1], 2);
wm.set(
  {
    name: "imooc",
  },
  "es"
);
// wm.clear(); //报错，WeakMap不支持clear(),不支持遍历
console.log(wm);
