describe ('Test Map', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('opens with Adapt NU', () => {
        cy.visit ('/');
        cy.get('[data-cy=map]').should('contain', 'map');
      });

    

  });