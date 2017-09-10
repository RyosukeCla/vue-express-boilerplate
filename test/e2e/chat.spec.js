import Nightmare from 'nightmare'
import {expect} from 'chai'

describe('test duckduckgo search results', () => {
  it('should find the nightmare github link first', (done) => {
    const nightmare = Nightmare()
    nightmare
      .goto('http://localhost:8080')
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
        console.error('Search failed:', e)
      })
  })
})
