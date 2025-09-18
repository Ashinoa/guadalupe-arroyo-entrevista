const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl: "https://tiendaonline.movistar.com.ar",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
