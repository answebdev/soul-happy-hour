/// <reference types="cypress" />

describe('Cocktails', () => {
  it('Searches for cocktails', () => {
    cy.visit(Cypress.env('baseUrl'));
    cy.get('[data-testid=input]').type('ABC');
  });

  //   it('Searches for cocktail that does not exist', () => {
  //     cy.get('[data-testid=input]').type('XOXO');
  //   });
});
