import './commands';
declare global {
    namespace Cypress {
      interface Chainable {
        login(user: string, password: string): Chainable<Element>;
        dragDrop(card: string, destiny: string): Chainable<Element>;
        typeData(title:string, desc?:string): Chainable<Element>;
        openEdit(): Chainable<Element>;
      }
    }
  }