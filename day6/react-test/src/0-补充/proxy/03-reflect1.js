var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  },
}

console.log(Reflect.get(myObject, 'foo')) // 1
Reflect.get(myObject, 'bar') // 2
console.log(Reflect.get(myObject, 'baz')) // 3