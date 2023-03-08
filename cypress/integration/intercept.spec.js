
it('Deve cadstra um novo usuário.', function () {
    cy.visit('/signup')

    const email = 'itallo@samuraibs.com'
    const name = 'itallo'
    const password = 'itallo123'



    cy.get('input[placeholder^="Nome"]').type(name)
    cy.get('input[placeholder$="email"]').type(email)
    cy.get('input[placeholder*="senha"]').type(password)

    cy.intercept('POST', ' /users',{
        statusCode:200
    }).as('postUser')

    cy.contains('button', 'Cadastrar').click()
    
    cy.wait('@postUser')


    cy.get('.toast')
        .should('be.visible')
        .find('p')
        .should('have.text', 'Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
})
