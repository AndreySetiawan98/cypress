import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given("I open the website", () => {

  cy.visit("https://www.jobstreet.co.id/"); // Replace with your website URL

});

When("I enter value {string} to input menu", (text) => {

  cy.get('input[name="keywords"]').type(text);

});

And("click search button", () => {

  cy.get('button[type="submit"]').first().click();

});

Then("I should be redirect page", () => {

  cy.url().should('eq', 'https://www.jobstreet.co.id/id/programmer-jobs'); // Replace with the expected URL after successful login

});