/// <reference types="cypress" />
import { utils } from "../../support/utility"

class HomePage {
    /*---------------  Start Web Element  ---------------*/

    searchBar = `[title='Search']`;
    




    /*----------------  End Web Element  ----------------*/

    // example using utils file
    goToHomePage ()
    {
        cy.visit(utils.getBaseUrl());
    }

    // example using default cypress commands
    enterSearchQuery (query: string)
    {
        cy.get(this.searchBar).should(`be.visible`).type(query).type(`{enter}`);
    }

    // example using testing-library commands
    clearCookies ()
    {
        cy.findByRole(`button`, { name: /I agree/i }).click();
    }
}

export const homePage = new HomePage();
