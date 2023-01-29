const obj = {
  name: "imooc",
  web: "www.imooc.com",
  course: "es",
};
// console.log(Object.keys(obj));//['name', 'web', 'course']
const res = Object.keys(obj).map((key) => obj[key]);
console.log(res); //['imooc', 'www.imooc.com', 'es']

console.log(Object.values(obj)); //['imooc', 'www.imooc.com', 'es']
console.log(Object.entries(obj)); //二维数组
for (let [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
