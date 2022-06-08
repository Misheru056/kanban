/// <reference types="cypress" />

it("Successful login", () => {
    cy.visit('http://localhost:3000');
    cy.get('#username').type('Ana');
    cy.get('#passwd').type('Pru3ba.???');
    cy.get('[type=submit]').click();
    cy.get('.error').should('not.exist');
});
