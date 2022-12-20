// // People 类 p1、 p2是实例化的对象
function People(name, age) {
  console.log(this); //指向new出来的实例化对象
  (this.name = name), (this.age = age); //实例属性
  People.count++;
  // 在构造函数内不建议写方法，因为每new一个对象，这个方法都会被调用一次
  //   this.showName = function () {
  //     console.log("我的名字是" + this.name);
  //   };
}

//静态属性 打印时直接类名调 People.xx
// 静态属性定义在类里，实例属性定义在构造函数里
People.count = 0;
console.log(People.count);

//静态方法
People.getCount = function () {
  console.log(this.name); //当前this指向的是构造函数，而不是实例化对象
  console.log("当前共有" + People.count + "个人");
};
People.getCount();

//实例方法
// 一般将方法定义在 构造类的原型下面
People.prototype.showName = function () {
  console.log("我的名字是" + this.name);
};
let p1 = new People("wyh", 24);
console.log(p1);
p1.showName();
console.log(People.count);
People.getCount();

// let p2 = new People("jason", 40);
// console.log(p2);
// p2.showName();

//
//
//
//
//
//
// //举例 已经存在的类 String Array Object
// let str = new String("imooc");
// console.log(str);

// let arr = new Array(1, 2, 3);
// console.log(arr);

// let obj = new Object();
// obj.name = "wyh";
// console.log(obj);

// //静态方法  不需要new出来 和是否实例化对象没关系
// console.log(Math.max(2, 3));
// console.log(Math.random());
