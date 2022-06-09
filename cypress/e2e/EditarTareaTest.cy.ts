/// <reference types="cypress" />

describe("Caso correcto", () => {
  beforeEach(()=>{
    localStorage.setItem("usuario", "editar")
  })

  it("Open the edit modal", () => {
    cy.visit("http://localhost:3000/organizador");
    cy.get('[data-testid="1buttoneditar"]').click();
  });

  it('Check if the form contains the values', () => {
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
  })

  it('Changes the values of the form and saves them', () => {
    cy.get('[data-testid="input-titulo"]').clear().type("Tarea editada");
    cy.get('[data-testid="input-descripcion"]').clear().type("Descripción editada");
    cy.get('[data-testid="sButton0"]').click();
    cy.get('[type="submit"]').click();
  });

  it('check if the values have change', () => {
    cy.get('[data-testid="input-titulo"]').should('not.exist')
    cy.get('[data-testid="titulo-tarea-1"]').should("exist");
    cy.get('#2').should('be.checked')
    cy.get('[data-testid="porcentaje1"]').should('have.text', 'Subtareas: 100%');
  })
});
