/// <reference types="cypress" />

describe('Cocktails', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });

  it('Searches for cocktails', () => {
    cy.get('[data-testid=input]').type('Mimosa');
    cy.get('[data-testid=cocktail-name]')
      .should('have.length', 1)
      .and('contain', 'Mimosa');

    cy.contains('details').click();
  });
});
