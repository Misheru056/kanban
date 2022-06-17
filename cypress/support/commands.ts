/// <reference types="cypress" />

Cypress.Commands.add("login", (user: string, passw: string) => {
  cy.fixture("login").then((login) => {
    if (user != "") cy.get(login.inputUsuario).type(user);
    if (passw != "") cy.get(login.inputPasswd).type(passw);
    cy.get(login.loginButton).click();
  });
});

Cypress.Commands.add("dragDrop", (card: string, destiny: string) => {
  const dataTransfer = new DataTransfer();
  cy.get(card).trigger("dragstart", {
    dataTransfer,
  });
  cy.get(destiny).trigger("dragenter", {
    dataTransfer,
  });
  cy.get(destiny).trigger("drop", {
    dataTransfer,
  });
});

Cypress.Commands.add("typeData", (title: string, desc?: string) => {
  cy.fixture("task").then((task) => {
    cy.get(task.btnNuevaTarea).click();
    cy.get(task.inputTitulo).type(title);
    if(desc)
      cy.get(task.inputDescripcion).type(desc);
  });
});

Cypress.Commands.add("openEdit", () => {
  cy.fixture("task").then((task) => {
    cy.get(task.btnEditarTarea1).click();
  });
});
