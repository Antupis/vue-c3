// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser.url(devServer)
      .waitForElementVisible('body', 10000  )
      .assert.containsText('h1', 'Charts')
      .assert.containsText('h3:nth-of-type(1)','Area Chart')
      .assert.containsText('body > div > div:nth-child(4) > div > div > h3','Line Chart')
      .assert.containsText('body > div > div:nth-child(6) > div > div > h3','Bar Chart')
      .end()
  }
}
