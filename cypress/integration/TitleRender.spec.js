describe('Test App', ()=>{
    it ('launch', () => {
        cy.visit('/');
    });

    it('should contains a App logo', () => {
        cy.visit('/');
        cy.get('[data-cy=logo]')
            .should('be.visible')
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0);
            });
    });

    it ('opens with Adapt NU', () => {
        cy.visit ('/');
        cy.get('[data-cy=title]').should('contain', 'Adapt NU');
    });

    it ('should contains a subtitle', () => {
        cy.visit ('/');
        cy.get('[data-cy=subtitle]').should('contain', 'accessiblity for all');
    })

})