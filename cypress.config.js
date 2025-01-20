const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.demoblaze.com/",
    defaultBrowser: "chrome",
    viewportHeight: 600,
    viewportHeight: 1000, 
  },
});
