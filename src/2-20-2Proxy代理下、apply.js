// 删除属性的拦截

// 需求 _开头设置为私有属性，希望用Proxy去防止对_开头的任何访问(获取get、设置set、删除deleteProperty、遍历ownKeys)
// let user = {
//   userName: "wyh",
//   age: 24,
//   _passWord: "****",
// };
// user = new Proxy(user, {
//   get(target, prop) {
//     if (prop.startsWith("_")) {
//       throw new Error("不可访问");
//     } else {
//       return target[prop];
//     }
//   },
//   set(target, prop, val) {
//     if (prop.startsWith("_")) {
//       throw new Error("不可访问");
//     } else {
//       target[prop] = val;
//       // 对于set属性来说，要返回一个布尔类型的值
//       return true;
//     }
//   },
//   //   拦截删除 返回布尔类型的值
//   deleteProperty(target, prop) {
//     if (prop.startsWith("_")) {
//       throw new Error("不可删除");
//     } else {
//       delete target[prop];
//       return true;
//     }
//   },
//   ownKeys(target) {
//     return Object.keys(target).filter((key) => !key.startsWith("_"));
//   },
// });

// get
//
// console.log(user.age);
// console.log(user._passWord);

//set
//
// user.age = 18;
// console.log(user.age);

// try {
//   user._passWord = "xxx";
// } catch (e) {
//   console.log(e.message); //不可访问
// }

// delete
// try {
//   //   delete user.age;
//   delete user._passWord;
// } catch (e) {
//   console.log(e.message);
// }
// // console.log(user.age);
// // console.log(user._passWord);

// 循环遍历
//
// for (let key in user) {
//   console.log(key);
// }

//
//
//
//
//
//
//apply
// 拦截函数调用 call和apply的操作 被apply拦截 用这种拦截方式修改函数的返回值
// let sum = (...args) => {
//   let num = 0;
//   args.forEach((item) => {
//     num += item;
//   });
//   return num;
// };
// sum = new Proxy(sum, {
//   // 三个参数，1拦截的目标，2当前的上下文，3目标对象参数的数组
//   apply(target, ctx, args) {
//     return target(...args) * 2;
//   },
// });
// console.log(sum(1, 2)); //6
// // .call改变this指向  下方 1.不想改变this指向null  2.传递到...args里面的参数
// console.log(sum.call(null, 1, 2, 3)); //12
// // .apply改变this指向  下方 1.不想改变this指向null  2.数组 包含...args里面的参数
// console.log(sum.apply(null, [1, 2, 3])); //12

//
//
//
//
//
//construct
//拦截 new 命名
let User = class {
  constructor(name) {
    this.name = name;
  }
};
User = new Proxy(User, {
  // 1.目标对象 2.构造函数的参数列表 (上方name)  3.创建实例时new命令作用的构造函数
  construct(target, args, newTarget) {
    // construct返回一个对象
    return new target(...args); //{name: 'imooc'}
  },
});
console.log(new User("imooc"));
