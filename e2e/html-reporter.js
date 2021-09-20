const d = (new Date).toISOString().replace(/z|t/gi,'_').trim()
const HtmlReporter = require('nightwatch-html-reporter')
/* Same options as when using the built in nightwatch reporter option */
const reporter = new HtmlReporter({
  reportsDirectory: `${__dirname}/reports/`,
  themeName: 'compact',
  relativeScreenshots: false,
  uniqueFilename: false,
  reportFilename: "generatedTestResults_"+d+".html",
  openBrowser: false
})

module.exports = {
  write(results, done) {
    reporter.fn(results, done)
  }
}