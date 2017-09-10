import Nightmare from 'nightmare'
import {expect} from 'chai'

const nightmare = Nightmare()

describe('test duckduckgo search results', () => {
  it('should find the nightmare github link first', (done) => {
    nightmare
      .goto('https://duckduckgo.com')
      .type('#search_form_input_homepage', 'github nightmare')
      .click('#search_button_homepage')
      .wait('#links .result .result__body a')
      .evaluate(() =>
        document.querySelector('#links .result .result__body a').href
      )
      .end()
      .then((link) => {
        expect(link).to.equal('https://github.com/segmentio/nightmare')
        done()
      }).catch((e) => {
        console.error('Search failed:', e)
      })
  });
});
