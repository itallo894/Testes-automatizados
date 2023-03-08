it('Verificar se a aplicação web está online', function () {
    cy.visit('/')
    //adicionando um comentario.
    cy.title()
        .should('eq', 'Samurai Barbershop by QAninja')



})
