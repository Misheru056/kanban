import './commands';
declare global {
    namespace Cypress {
      interface Chainable {
        login(user: string, password: string): Chainable<Element>;
      }
    }
  }