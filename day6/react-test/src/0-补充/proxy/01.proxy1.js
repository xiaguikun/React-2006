let test = {
  name: "小红"
};
test = new Proxy(test, {
  get(target, key) {
    console.log('获取了getter属性');
    return target[key];
  }
});
console.log(test.name);

