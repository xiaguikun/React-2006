function myPromise(n) {
  return new Promise(resolve => {
      console.log(n)
      setTimeout(() => resolve(n+1), n)
  })
}
function step1(n) {
  return myPromise(n)
}
function step2(n) {
  return myPromise(n)
}
function step3(n) {
  return myPromise(n)
}

// 如果用 Promise 实现
step1(1000)
.then(a => step2(a))
.then(b => step3(b))
.then(result => {
  console.log(result)
})

// 如果用 async/await 来实现呢
async function myResult() {
  const a = await step1(1000)
  const b = await step2(a)
  const result = await step3(b)
  return result
}
myResult().then(result => {
  console.log(result)
}).catch(err => {
  // 如果myResult内部有语法错误会触发catch方法
})