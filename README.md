```js
let p = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000)
})

p.then(value => console.log(value))  // 1
```