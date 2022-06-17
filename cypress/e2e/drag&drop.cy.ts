/// <reference types="cypress" />

describe("drag and drop is working", () => {
  beforeEach(() => {
    localStorage.setItem("usuario", "Ana");
    cy.visit("http://localhost:3000/organizador");
  });

  it("drag from nuevas to en proceso", () => {
    cy.fixture("drag&drop").then((drag) => {
      cy.dragDrop("#1", drag.proceso);
    });
  });

  it("drag from nuevas to bloqueadas", () => {
    cy.fixture("drag&drop").then((drag) => {
      cy.dragDrop("#1", drag.bloqueadas);
    });
    cy.get("[data-testid='1buttoneditar']").should("not.exist");
  });
});
