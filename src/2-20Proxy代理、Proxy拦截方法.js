//ES5中也提供了个相似的api  可以对属性进行拦截
let obj = {
  name: "gjk",
};
let newVal = "";
Object.defineProperty(obj, "name", {
  get() {
    console.log("get");
    return newVal;
  },
  set(val) {
    console.log("set");
    //this.name = val会造成死循环
    newVal = val;
  },
});
obj.name = "wyh";
console.log(obj.name);

//ES6 proxy
let obj1 = {};
let p = new Proxy(obj1, {}); //对应两个参数  第一个参数是要劫持的参数或者方法 第二个参数是代理配置 Hook 钩子函数
p.name = "world";
console.log(obj1.name);

//proxy 常用拦截方法

//get
let arr = [7, 8, 9];
//想查看每个数组的下标是否对应有值
arr = new Proxy(arr, {
  get(target, prop) {
    //target 当前传进来的数组  prop传的是1
    console.log(target, prop);
    return prop in target ? target[prop] : "error";
  },
});
console.log(arr[1]);

let dict = {
  hello: "你好",
  world: "世界",
};
dict = new Proxy(dict, {
  get(target, prop) {
    return prop in target ? target[prop] : prop;
  },
});
console.log(dict["world"]);
console.log(dict["hahah"]);

//set
let arr1 = [];
//有一个需求 数组有限制 只能设置数字类型  设置其他类型的就抛出错误
arr = new Proxy(arr, {
  set(target, prop, val) {
    //第一个参数是目标对象 第二个参数指当前目标属性的值，第三个属性是给目标属性要设置的值
    if (typeof val === "number") {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  },
});
arr1.push(5);
arr1.push(6);
// 虽然使用了代理，但数组自带的方法还是可以使用的
console.log(arr1[0]); //5
console.log(arr1[1]); //6

//
//
//
// has
// 判断key是否在当前对象里，返回true、false
let range = {
  start: 1,
  end: 5,
};
range = new Proxy(range, {
  has(target, prop) {
    return prop >= target.start && prop <= target.end;
  },
});
console.log(2 in range); //true
console.log(9 in range); //false

//
//
//
//ownKeys
//用于对象循环遍历时进行拦截
let obj2 = {
  name: "imooc",
  [Symbol("es")]: "es6",
};
console.log(Object.getOwnPropertyNames(obj2));
//["name"]; 此方法不会返回Symbol()类型的键名
console.log(Object.getOwnPropertySymbols(obj2));
//[Symbol(es)]  只能读取Symbol的属性

// 需求 _开头设置为私有属性，在遍历时，不希望被遍历到
let userInfo = {
  userName: "wyh",
  age: 24,
  _passWord: "****",
};
// 可以用ownKeys拦截器做
userInfo = new Proxy(userInfo, {
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
});
for (let key in userInfo) {
  console.log(key); //userName age 无_passWord
}
console.log(Object.keys(userInfo)); //['userName', 'age']
