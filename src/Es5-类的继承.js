function Animal(name) {
  this.name = name;
}
Animal.prototype.showName = function () {
  console.log("名字是：" + this.name);
};

function Dog(name, color) {
  // 希望Dog能继承Animal的属性，将Dog中的this传递到Animal中
  // 1参 传什么  2参 Animal里面的参数
  Animal.call(this, name); //继承属性，不继承方法
  this.color = color;
}

// 继承属性+继承方法=组合式继承
// 继承方法
Dog.prototype = new Animal();
Dog.prototype.constuctor = Dog;

let d1 = new Dog("dahuang", "yellow");
console.log(d1);
d1.showName();
