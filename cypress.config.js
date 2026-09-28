const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultBrowser: 'chrome',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: "QA - Automation Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    reportFilename: '[status]_[datetime]-report',
    timestamp: 'yyyy-mm-dd_HHMMss',
    reportDir: 'cypress/reports'

  },

  e2e: {

    baseUrl:'https://demoqa.com' ,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    }
    
  }
});
