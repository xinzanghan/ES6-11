// includes 返回boolean 数组中是否包含某一个值
// const arr = ["es6", "es7", "es8"];
// console.log(arr.includes("es7")); //true

// // 当前要搜索的值，从索引为几的位置开始查找
// console.log(arr.includes("es7", 1)); //true
// console.log(arr.includes("es7", 2)); //false

// // 二参为负数，从倒数第几个开始找、
// console.log(arr.includes("es7", -2)); //false
// console.log(arr.includes("es7", -2)); //true

//

//

// indexOf 返回所在下标索引
// const arr = ["es6", "es7", "es8"];
// console.log(arr.indexOf("es7")); //1
// console.log(arr.indexOf("es9")); //-1

//

//

//includes和indexOf只能判断基本数据类型，不能判断引用数据类型
// const arr = ["es6", ["es7", "es8"], "es9"];
// console.log(arr.includes(["es7", "es8"])); //false
// console.log(arr.indexOf(["es7", "es8"])); //false

//

//判断NaN
const arr = ["es6", "es7", NaN, "es8"];
console.log(arr.indexOf(NaN)); //-1
console.log(arr.includes(NaN)); //true

//什么时候使用includes/indexOf
//有NaN时，只能用includes
// 是否关心搜索值存在的位置，关心——>indexOf
// 只关心搜索值是否存在——>includes
