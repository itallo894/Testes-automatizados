

it('Deve cadstra um novo usuário.', function (){ 
    cy.visit('/signup')

    const email = 'itallo@samuraibs.com'
    const name = 'itallo'
    const password = 'itallo123'

    cy.task('removeUser', email)
        .then(function (result) {
            console.log(result)
        })


    cy.get('input[placeholder^="Nome"]').type(name)
    cy.get('input[placeholder$="email"]').type(email)
    cy.get('input[placeholder*="senha"]').type(password)

  

    cy.contains('button', 'Cadastrar').click()



    cy.get('.toast')
        .should('be.visible')
        .find('p')
        .should('have.text', 'Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')




})


it('Deve cadstra um novo usuário.', function () {
    cy.visit('/signup')

    const email = 'itallo@samuraibs.com'
    const name = 'itallo'
    const password = 'itallo123'



    cy.get('input[placeholder^="Nome"]').type(name)
    cy.get('input[placeholder$="email"]').type(email)
    cy.get('input[placeholder*="senha"]').type(password)

    

    cy.contains('button', 'Cadastrar').click()

    

    cy.get('.toast')
        .should('be.visible')
        .find('p')
        .should('have.text', 'Email já cadastrado para outro usuário.')




})