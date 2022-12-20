// let s1 = Symbol();
// let s2 = Symbol();
// console.log(s1);
// console.log(s2);
// console.log(s1 === s2); //false

//
//
//
// //把字符串作为参数传进Symbol，用于对Symbol的描述
// let s1 = Symbol("foo");
// let s2 = Symbol("foo");
// console.log(s1);
// console.log(s2);
// console.log(s1 === s2); //false

//
//
//
// //参数是对象时，会自动调用该对象的toString方法
// const obj = {
//   name: "wyh",
//   toString() {
//     return this.name;
//   },
// };
// let s = Symbol(obj);
// console.log(s); //Symbol([object Object])
// // console.log(s); //Symbol(wyh);

//
//
//描述
// let s = Symbol("foo");
// s.name = "imooc";
// console.log(s); //Symbol()并不能进行赋值，因为Symbol不是对象
// console.log(s.description); //foo

//
//
//Symbol("foo")每次定义都会生成新的
//Symbol.for("foo")在全局定义，下次定义前在全局找 有的话直接赋值
// //Symbol定义的另一种写法
// let s1 = Symbol.for("foo");
// let s2 = Symbol.for("foo");
// console.log(s1 === s2); // true

//
//
//
// //验证：Symbol.for("foo")在全局定义
// function foo() {
//   return Symbol.for("foo");
// }
// const x = foo();
// const y = Symbol.for("foo");
// console.log(x === y); // true

//
//
//
// //Symbol.keyFor找当前的Symbol是否有登记在全局的描述
// const s1 = Symbol("foo");
// console.log(Symbol.keyFor(s1)); //undefined

// const s2 = Symbol.for("foo");
// console.log(Symbol.keyFor(s2)); //foo

//
//
//
//
//
//
//Symbol的应用场景
//1. 将Symbol作为对象的key
// const stu1 = "李四";
// const stu2 = "李四";
// const grage = {
//   [stu1]: { address: "yyy", tel: "222" },
//   [stu2]: { address: "zzz", tel: "333" },
// };
// console.log(grage);//李四: {address: 'zzz', tel: '333'}

// const stu1 = Symbol("李四");
// const stu2 = Symbol("李四");
// const grage = {
//   [stu1]: { address: "yyy", tel: "222" },
//   [stu2]: { address: "zzz", tel: "333" },
// };
// console.log(grage);
// //Symbol(李四): {address: 'yyy', tel: '222'}
// // Symbol(李四):{address: 'zzz', tel: '333'}
// console.log(grage[stu1]);
// console.log(grage[stu2]);

//
//
//
//
//
// 2.Symbol遍历取值
// const sym = Symbol("imooc");
// class User {
//   constructor(name) {
//     this.name = name;
//     this[sym] = "imooc.com";
//   }
//   getName() {
//     return this.name + this[sym];
//   }
// }
// const user = new User("wangyihan");
// console.log(user.getName());

//
//
// //Symbol的遍历
//只能读取不是Symbol的属性
// for (let key in user) {
//   console.log(key);
// }

// 只能读取不是Symbol的属性
// for (let key of Object.keys(user)) {
//   console.log(key); //name
// }

// //只能读取Symbol的属性
// for (let key of Object.getOwnPropertySymbols(user)) {
//   console.log(key); //name
// }

//
// //两者都能读取到
// for (let key of Reflect.ownKeys(user)) {
//   console.log(key); //name Symbol(imooc)
// }

//
//
//
//
//
//
// 3. Symbol消除魔术字符串（多次出现，多次引用，手输怕错）
// 魔术字符串举例
// function getArea(shape) {
//   let area = 0;
//   switch (shape) {
//     case "Triangle":
//       area = 1;
//       break;
//     case "Circle":
//       area = 2;
//       break;
//   }
//   return area;
// }
// console.log(getArea("Triangle"));

// const shapeType = {
//   //   triangle: "Triangle",
//   //   circle: "Circle",
//   triangle: Symbol(),
//   circle: Symbol(),
// };
// function getArea(shape) {
//   let area = 0;
//   switch (shape) {
//     case shapeType.triangle:
//       area = 1;
//       break;
//     case shapeType.circle:
//       area = 2;
//       break;
//   }
//   return area;
// }
// console.log(getArea(shapeType.circle));
