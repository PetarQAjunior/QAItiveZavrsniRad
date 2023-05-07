const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ecommerce-playground.lambdatest.io',
    viewportWidth: 1536,
    viewportHeight: 960,
    setupNodeEvents(on, config) { 
    },
  },
});
