const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.demoblaze.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    defaultBrowser: "chrome",
    viewportHeight: 600,
    viewportHeight: 1000
    
  },

});
