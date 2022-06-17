/// <reference types="cypress" />

describe("Edit task", () => {
  beforeEach(()=>{
    localStorage.setItem("usuario", "editar");
    cy.visit("http://localhost:3000/organizador");
  })

  it("Open the edit modal", () => {
    cy.openEdit();
  });

  it('Check if the form contains the values', () => {
    cy.openEdit();
    cy.fixture("task").then((task) => {
      cy.get(task.inputTitulo).should("have.value", "Mi tarea 1");
      cy.get(task.inputDescripcion).should(
        "have.value",
        "YOLOYOLOYOLO"
      );
      cy.get(task.inputSubtarea1).should(
        "have.value",
        "Subtarea 1"
      );
      cy.get('[data-testid="subtareas[1].id"]').should(
        "have.value",
        "Subtarea 2"
      );
    });
  });

  it('Changes the values of the form and saves them', () => {
    cy.openEdit();
    cy.fixture("task").then((task) => {
      cy.get(task.inputTitulo).clear().type("Tarea editada");
      cy.get(task.inputDescripcion).clear().type("Descripción editada");
      cy.get("[data-testid='sButton0']").click();
      cy.get(task.btnGuardarCambios).click();
    });
    cy.get("#1").should("not.contain", "Subtarea 1");
  });

  it.only('Marking tasks as completed in kanban changes the total percentage', () => {
    cy.get('[data-testid="porcentaje1"]').should('have.text', 'Subtareas: 50%');
    cy.fixture("task").then((task) => {
      cy.get(task.checkSubtarea1).check();
    });
    cy.get('[data-testid="porcentaje1"]').should('have.text', 'Subtareas: 100%');
  });
});
