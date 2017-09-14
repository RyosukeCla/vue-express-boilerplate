import Nightmare from 'nightmare'
import {expect} from 'chai'

describe('chat', () => {
  it('should work', (done) => {
    const nightmare = Nightmare()
    nightmare
      .goto('http://localhost:8080')
      .click('a[href="/chat"]')
      .wait('.messages')
      .type('input', 'vue express boilerplate')
      .click('button')
      .wait('ul li')
      .evaluate(() => {
        return document.querySelector('ul li').innerHTML
      })
      .end()
      .then((message) => {
        expect(message).to.equal('vue express boilerplate')
        done()
      }).catch((e) => {
        console.error('Failed:', e)
      })
  })
})
