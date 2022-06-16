/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Successful login", () => {
    cy.login("Ana", "Pru3ba?????");
    cy.fixture("login").then((login) => {
      cy.get(login.error).should("not.exist");
    });
  });

  it("Login with no user", () => {
    cy.login("", "Pru3ba?????");
    cy.fixture("login").then((login) => {
      cy.get(login.error).should("exist");
    });
  });

  it("Login with no password", () => {
    cy.login("Ana", "");
    cy.fixture("login").then((login) => {
      cy.get(login.error).should("exist");
    });
  });

  it("Login with not valid password pattern", () => {
    cy.login("Ana", "Passw");
    cy.fixture("login").then((login) => {
      cy.get(login.error).should("contain", "Formato de contraseña inválido");
    });
  });
});
