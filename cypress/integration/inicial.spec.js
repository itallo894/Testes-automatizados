it('Verificar se a aplicação web está online', function () {
    cy.visit('/')

    cy.title()
        .should('eq', 'Samurai Barbershop by QAninja')



})