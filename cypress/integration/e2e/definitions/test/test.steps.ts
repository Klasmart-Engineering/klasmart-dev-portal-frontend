import { When, Then, Given } from "cypress-cucumber-preprocessor/steps";

Given("I go to google", () => {
    cy.visit('/');
    cy.get("#password").should("be.visible");
})
