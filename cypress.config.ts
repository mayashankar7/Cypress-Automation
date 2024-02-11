import { defineConfig } from 'cypress'
const createEsbuildPlugin =
    require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin

const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')

const nodePolyfills =
    require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin

const addCucumberPreprocessorPlugin =
    require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
export default defineConfig({
  e2e: {
    specPattern: [
        "cypress/e2e/*.feature",
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
    ],
    async setupNodeEvents(
        on: Cypress.PluginEvents,
        config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on(
          "file:preprocessor",
          createBundler({
            plugins: [nodePolyfills(), createEsbuildPlugin(config)],
          })
      );
      return config;
    },
  },
});