import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("precondition", () =>{
    cy.visit("https://www.jobstreet.co.id/")
})

When("action", () => {
    cy.title().should('eq','Lowongan kerja di Indonesia - Cari Lowongan Kerja - Karir | Jobstreet')
})

Then("testable outcome", () => {
    cy.title().should('eq','Lowongan kerja di Indonesia - Cari Lowongan Kerja - Karir | Jobstreet')
})