

import SignupPage from '../support/pages/signup'
it('Verificar se o site está no ar', function () {
    SignupPage.go()

    cy.title()
        .should('eq', 'Samurai Barbershop by QAninja')

})

    const user = {
        name: 'Itallo de sousa',
        email: 'itallo@samuraib225s.com',
        password: 'Itallo321'
    }

    it('Adicionar dados de cadastro', function () {
        SignupPage.go()
        SignupPage.form(user)
        SignupPage.submit()
        SignupPage.toast.shouldHaveText('Email já cadastrado para outro usuário.')







    })
