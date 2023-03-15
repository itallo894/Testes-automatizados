

import loginPage from '../support/pages/login'
import dashPage from '../support/pages/dashbord'

describe('login', function () {
    context('Se o usúario for bom acessar sem falha', function () {

        const user = {
            name: 'josé augusto',
            email: 'josé@samuraibs.com',
            password: 'jose321',
            is_provider: true

        }

        before(function () {
            cy.postUser(user)

        })

        it('Acessando  a página', function () {
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()

            dashPage.header.userlonggerIN(user.name)




        })



    })

    context('Quando o usuário é bom mais a senha está incorreta', function () {
        let user = {
            name: 'Sergio kamura',
            email: 'sergioK@samuraibs.com',
            password: 'pwd123',
            is_provider: true
        }
        before(function () {
            cy.postUser(user).then(function () {
                user.password = 'abc123'
            })
        })





        it('Deve notificar erro de credenciais', function () {
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            cy.wait(5000)


        })







    })

})