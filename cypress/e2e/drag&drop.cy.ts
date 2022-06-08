/// <reference types="cypress" />

describe("drag and drop is working", () => {
  beforeEach(() => {
    localStorage.setItem("usuario", "Ana");
    cy.visit("http://localhost:3000/organizador");
  });

  it("drag from nuevas to bloqueadas", () => {

    const dataTransfer = new DataTransfer();

    cy.get("#1").trigger("dragstart", {
      dataTransfer
    });

    cy.get("#bloqueada").trigger("dragenter", {
        dataTransfer
      });
 
    cy.get("#bloqueada").trigger("drop", { 
        dataTransfer 
      });

  });
});
