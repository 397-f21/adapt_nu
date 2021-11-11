describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('opens with Adapt NU', () => {
        cy.visit ('/');
        cy.get('[data-cy=title]').should('contain', 'Adapt NU');
      });

    it ('should contain USA', () => {
        cy.visit ('/');
        cy.get('[data-cy=map]').click();
        cy.get('[data-cy=LocationCard]').should('contain', 'USA');
    });

  });