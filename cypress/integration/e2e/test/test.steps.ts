import { When, Then, Given } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../page_objects/home-page";

Given("I go to google", () => {
    homePage.goToHomePage();
    homePage.clearCookies();
    homePage.enterSearchQuery("Ricardo Barata");
})
