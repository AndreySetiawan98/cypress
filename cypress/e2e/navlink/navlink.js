import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given("I open the website", () => {

  cy.visit("https://www.jobstreet.co.id/id/profile"); // Replace with your website URL

});

When("click navlink lihat profil", () => {

  cy.get('div').contains('Lihat profil').should('have.attr', 'href', '/id/profile');

});

Then("I should be redirect page", () => {

  cy.url().should('eq', 'https://www.jobstreet.co.id/id/profile'); // Replace with the expected URL after successful login

});