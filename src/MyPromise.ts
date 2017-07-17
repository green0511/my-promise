enum STATE { PENDING, FULFILLED, REJECTED }

const bind = (func, context) => func.bind(context)

export class MyPromise { 

  value // 

  reason //

  state: STATE = STATE.PENDING // 当前状态

  thenStacks = []

  constructor(handler) {
    try {
      handler(bind(this.resolve, this), bind(this.reject, this))
    } catch (error) {
      this.state = STATE.REJECTED
      this.reason = error
    }
  }

  resolve(value) {
    this.state = STATE.FULFILLED
    this.value = value
    this.thenStacks.forEach(handler => handler(value))
  }

  reject(reason) {
    this.reason = reason
  }

  then(handler) {
    this.thenStacks.push(handler)
  }

}