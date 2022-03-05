/// <reference types="cypress" />

describe('Cocktails', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
    // cy.visit(Cypress.env('liveBaseUrl'));
  });

  it('Searches for cocktails', () => {
    cy.get('[data-testid=input]').type('Mimosa');
    cy.get('[data-testid=cocktail-name]')
      .should('have.length', 1)
      .and('contain', 'Mimosa');

    cy.log(
      'Checking that user goes to Mimosa details page after clicking Details button'
    );
    cy.contains('details').click();

    cy.log(
      'Checking that user goes back to the home page when clicking Back Home button'
    );
    cy.get('[data-testid=back-btn]').click();
    // cy.contains('back home').click();
  });

  it('Searches for cocktail that does not exist', () => {
    cy.get('[data-testid=input]').type('The Obi Wan');
    cy.contains('no cocktails matched your search criteria').should('exist');
  });

  it('Checks link to About Page', () => {
    cy.log('Checking that there is an About link');
    cy.get('[data-testid=about-link]').click();
    cy.log('Checking URL for About Page');
    cy.url().should('include', '/about');
    cy.log('Checking that h1 header has About Us text');
    cy.get('[data-testid=about-us]').should('have.text', 'about us');
  });

  it('Checks link to Home Page', () => {
    cy.log('Checking that there is an Home link');
    cy.get('[data-testid=home-link]').click();
    cy.log('Checking URL for Home Page');
    cy.url().should('include', '/');
    cy.log('Checking that h2 header has Cocktails text');
    cy.get('[data-testid=cocktails-header]').should('have.text', 'cocktails');
  });
});

// Mocking API calls using fixtures and mock data in another file: https://www.youtube.com/watch?v=z57lsgbImug (at around 7:00)
// Get request in Postman with this URL: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mimosa
// Use data in the response to put in the separate fixture file (intercetFixture.json) as the mock data
