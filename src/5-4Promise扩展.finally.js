// finally 不管是成功还是失败，都会进入
new Promise((resolve, reject) => {
  setInterval(() => {
    // resolve("success");
    reject("fail");
  }, 1000);
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally");
  });
