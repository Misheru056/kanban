/// <reference types="cypress" />

Cypress.Commands.add("login", (user: string, passw: string) => {
  cy.fixture("login").then((login) => {
    if(user != "")
        cy.get(login.inputUsuario).type(user);
    if(passw != "")
        cy.get(login.inputPasswd).type(passw);
    cy.get(login.loginButton).click();
  });
});
