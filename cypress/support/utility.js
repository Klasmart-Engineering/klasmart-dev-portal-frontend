// utility.ts
// add utility methods to be used in page object files

export class Utility {
    getBaseUrl() {
        let envi = Cypress.env("ENV"); //Get the value of environment variable i.e ENV
        if (envi != null)
        {
          return Cypress.env(envi);
        }
        else return Cypress.config("baseUrl"); // alhpa is the default if no environment is specified
      }
}

export const utils = new Utility();
