/// <reference types="cypress" />

const baseURL = "https://demo.applitools.com/";

it("navigate to target url", () => {
    cy.visit(baseURL);
    cy.get('.auth-header').contains("Login Form")
})