const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ecommerce-playground.lambdatest.io',
    viewportWidth: 1000,
    viewportHeight: 660,
    setupNodeEvents(on, config) { 
    },
  },
});
