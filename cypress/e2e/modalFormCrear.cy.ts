/// <reference types="cypress" />

describe('Task creation', () => {
    beforeEach(() => {
        localStorage.setItem('usuario', 'Ana');
        cy.visit('http://localhost:3000/organizador');
    });

    it('new task with all fields fulfilled', () => {
        cy.typeData("Nuevo título", "Nueva descripción");
        cy.fixture('task').then((task) => {
            cy.get(task.inputSubtarea1).type("Nueva sub 1");
            cy.get(task.btnCrearTarea).click();
            cy.get(task.error).should('not.exist');
        });
    });

    it('new task with multiple subtasks', () => {
        cy.typeData("Nuevo título", "Nueva descripción");
        cy.fixture('task').then((task) => {
            cy.get(task.inputSubtarea1).type("Nueva sub 1");
            cy.get(task.btnAddSubtarea).click();
            cy.get('[data-testid="subtareas[1].id"]').type('Subtarea 2');
            cy.get(task.btnCrearTarea).click();
            cy.get(task.error).should('not.exist');
        });
    });

    it('new task creation adding and removing subtasks', () => {
        cy.typeData("Nuevo título", "Nueva descripción");
        cy.fixture('task').then((task) => {
            cy.get(task.inputSubtarea1).type("Sub 1");
            cy.get(task.btnAddSubtarea).click();
            cy.get('[data-testid="subtareas[1].id"]').type('Sub 2');
            cy.get(task.btnRemoveSubtarea1).click();
            cy.get(task.btnCrearTarea).click();
            cy.get(task.error).should('not.exist');
        });
        cy.contains('Sub 2').should('exist');
        cy.contains('Sub 1').should('not.exist');
    });

    it('new task without required fields', () => {
        cy.fixture('task').then((task) => {
            cy.get(task.btnNuevaTarea).click();
            cy.get(task.btnCrearTarea).click();
            cy.get(task.error).should('exist');
        });
    });
});