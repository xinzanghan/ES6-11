// 对象的扩展讲过
// let target = {
//   a: 3,
// };
// let source = {
//   a: 1,
//   b: 2,
// };
// Object.assign(target, source);
// console.log(target);

// 新 Object.assign（）在拷贝对象时 是有问题的
// 基本数据类型Number、String 、Boolean、Null、Undefined可以替换
// 引用数据类型 对象、数组、函数 是把地址直接指过去，容易丢属性

// let target = {
//   a: {
//     b: {
//       c: 1,
//     },
//     e: 4,
//     f: 5,
//     g: 6, // 属性被丢失
//   },
// };
// let source = {
//   a: {
//     b: {
//       c: 1,
//     },
//     e: 4,
//     f: 5,
//   },
// };
// Object.assign(target, source);
// console.log(target);

//

// let a = 5;
// let b = a;
// a = 6;
// console.log(a, b);

//
//

// 浅拷贝
// let obj1 = {
//   name: "wangyihan",
//   age: 24,
// };
// let obj2 = obj1; //obj1和obj2指向了同一块内容地址  浅拷贝
// console.log(obj1);
// obj1.age = 18;
// console.log(obj2); //{name: 'wangyihan', age: 18}

//
//

// JSON '{"a":"hello","b":"world"}'
// JSON.parse(); //json格式字符串——>对象
// JSON.stringify(); //对象——>json格式字符串

// let obj = JSON.parse('{"a":"hello","b":"world"}');
// console.log(obj); // {a: 'hello', b: 'world'}
// let str = JSON.stringify(obj);
// console.log(str); // {"a":"hello","b":"world"}

//
//
// // 使用JSON.parse() 和JSON.stringify()进行深拷贝
// let obj1 = {
//   name: "wangyihan",
//   age: 24,
// };
// let str = JSON.stringify(obj1);
// let obj2 = JSON.parse(str);
// obj1.age = 18;
// console.log(obj2); //{name: 'wangyihan', age: 24}与56行做对比

//
//
// JSON.parse() 和JSON.stringify()不支持对Function的深克隆，下方只考虑对对象和数组的深克隆
// 首先写一个方法判断数据类型
// let checkType = (data) => {
//   //   console.log(Object.prototype.toString.call(data));
//   console.log(Object.prototype.toString.call(data).slice(8, -1)); //想直接输出数据类型
// };
// checkType({}); //[object Object]  Object
// checkType([]); //[object Array]   Array

//
//
//
//
//
//

// 首先写一个方法判断数据类型
let checkType = (data) => {
  return Object.prototype.toString.call(data).slice(8, -1);
};
checkType({});

let deepClone = (target) => {
  let targetType = checkType(target);
  let result; //对象、数组、基本数据类型
  if (targetType === "Object") {
    result = {};
  } else if (targetType === "Array") {
    result = [];
  } else {
    return target;
  }

  //
  //循环遍历对象或数组，将里面的每一项放进result初始值
  for (let i in target) {
    let value = target[i]; //每一项的值不一定是什么类型，需要判断每一项值的类型
    let valueType = checkType(value);
    if (valueType === "Object" || valueType === "Array") {
      result[i] = deepClone(value); // 递归调用自己
    } else {
      // 基本数据类型
      result[i] = value;
    }
  }

  return result;
};

// // 测试数组
// let arr1 = [1, 2, { age: 18 }];
// let arr2 = deepClone(arr1);
// arr2[2].age = 24;
// console.log(arr1, arr2);

// 测试对象
let obj1 = {
  name: "wangyihan",
  hobby: ["coding", "eating"],
};
let obj2 = deepClone(obj1);
obj2.hobby[0] = "sleeping";
console.log(obj1);
console.log(obj2);
