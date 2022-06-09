/// <reference types="cypress" />
describe("empty spec", () => {
  it("passes", () => {
    localStorage.setItem("usuario", "sdasdd");
    cy.visit("http://localhost:3000/organizador");
    cy.get('[data-testid="1buttoneditar"]').click();
    cy.get('[data-testid="input-titulo"]').should("have.value", "Mi tarea 1");
    cy.get('[data-testid="input-descripcion"]').should(
      "have.value",
      "YOLOYOLOYOLO"
    );
    cy.get('[data-testid="subtareas[0].id"]').should(
      "have.value",
      "Subtarea 1"
    );
    cy.get('[data-testid="subtareas[1].id"]').should(
      "have.value",
      "Subtarea 2"
    );
    cy.get('[data-testid="input-titulo"]').clear().type("Tarea editada");
    cy.get('[data-testid="input-descripcion"]').clear().type("Descripción editada");
      
    cy.get('[data-testid="sButton0"]').click();
    cy.get('[type="submit"]').click();

    cy.get('[data-testid="input-titulo"]').should('not.exist')
    cy.get('[data-testid="titulo-tarea-1"]').should("exist");
    cy.get('#2').should('be.checked')
    cy.get('[data-testid="porcentaje1"]').should('have.text','Subtareas: 100%');
  });
});
