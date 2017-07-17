import { expect } from 'chai'

import { MyPromise } from '../src'

describe('test MyPromise', () => {
  it('basic test', (done) => {
    let value = 1
    let p = new MyPromise((resolve, reject) => {
      setTimeout(() => resolve(value), 1000)
    })
    p.then((v) => {
      expect(v).to.be.equals(value)
      done()
    })
  })
})