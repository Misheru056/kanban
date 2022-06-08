/// <reference types="cypress" />

describe('new task form functioning correctly', () => {
    beforeEach(() => {
        localStorage.setItem('usuario', 'Ana');
        cy.visit('http://localhost:3000/organizador');

        cy.get('[data-testid="btnNuevaTarea"]').click();
        cy.get('[data-testid="input-titulo"]').type('Nueva tarea');
        cy.get('[data-testid="input-descripcion"]').type('Nueva descripción');
        cy.get('[data-testid="subtareas[0].id"]').type('Subtarea 1');
    });

    it('new task with all fields filled', () => {
        cy.get('[data-testid="btn-create"]').click();
        cy.get('.error').should('not.exist');
    });

    it('new task with multiple subtasks', () => {
        cy.get('[data-testid="btn-add"]').click();
        cy.get('[data-testid="subtareas[1].id"]').type('Subtarea 2');
        cy.get('[data-testid="btn-create"]').click();
        cy.get('.error').should('not.exist');
    });

    it('new task creation adding and removing subtasks', () => {
        cy.get('[data-testid="btn-add"]').click();
        cy.get('[data-testid="subtareas[1].id"]').type('Sub 2');
        cy.get('[data-testid="btn-remove0"]').click();
        cy.get('[data-testid="btn-create"]').click();
        cy.get('.error').should('not.exist');    
        cy.contains('Sub 2').should('exist');
        cy.contains('Sub 1').should('not.exist');
    });
});