import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";

// Before(() => {
//   cy.visit('/')
// })

Given('I open the app', () => {
  cy.visit('/')
})
Then('I see {string} on the page', (title) => {
  cy.get('h2').should('contain', title)
})

Given('I am on the landing page', () => {
  cy.visit('/')
})
When('I click {string} button', (string) => {
  cy.get('button').contains(string).click()
})
Then('I am redirected to the documentation page', () => {
  cy.location('pathname').should('eq', '/docs/test-document')
})
