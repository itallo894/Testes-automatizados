

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
            cy.task('removeUser', user.email)
                .then(function (result) {
                    console.log(result)
                })

            cy.request(
                'POST',
                'http://localhost:3333/users',
                user
            ).then(function (response) {
                expect(response.status).to.eq(200)
            })

        })

        it('Acessando  a página', function () {
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()

            dashPage.header.userlonggerIN(user.name)




        })



    })

})