



import signupPage from "../support/pages/signup"
//usa importação para deixa o codigo menor.
describe('Cadastro', function () {

    before(function(){
        cy.fixture('itallo').then(function(itallo){
            this.itallo = itallo
        })
    })

    context.only('Quando o usuario é novato', function () {
       
        before(function () {
            cy.task('removeUser', this.itallo.email)
                .then(function (result) {
                    console.log(result)
                })


        })
        it('Deve preencher com sucesso.', function () {

            signupPage.go()
            signupPage.form(this.itallo)
            signupPage.submit()
            signupPage.toast.shouldHaveText('Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
        })
    })


    context('Quando o email já existe', function () {
        const user = {
            name: 'Joao Mario',
            email: 'Jm@samuraib225s.com',
            password: 'Itallo321',
            is_provider: true
        }

        before(function () {
            cy.postUser(user)


        })
        it('Não deve cadastra o usuário', function () {

            signupPage.go()
            signupPage.form(user)
            signupPage.submit()
            signupPage.toast.shouldHaveText('Email já cadastrado para outro usuário.')

        })
    })
})

context('Quando o email for incorreto', function () {
    const user = {
        name: 'Sandra regina',
        email: 'sandra.gmail.com',
        password: 'Itallo123'
    }


    it('exibir mensagem de alerta', function () {
        signupPage.go()
        signupPage.form(user)
        signupPage.submit()
        signupPage.alert.haveText('Informe um email válido')


    })






})


context('Quando a senha for muito curta', function () {
    const passwords = ['1', '2a', 'ab3', 'abc4', 'abc#5']

    beforeEach(function () {
        signupPage.go()
    })
    passwords.forEach(function (p) {
        it('Não deve cadastra com a senha : ' + p, function () {
            const user = { name: 'Flávio lima', email: 'fv@gmail.com', password: p }
            signupPage.form(user)
            signupPage.submit()

        })
    })
    afterEach(function () {
        signupPage.alert.haveText('Pelo menos 6 caracteres')

    })





})

context('Quando nenhum um campo e preenchido', function () {
    const alertMessages = [
        'Nome é obrigatório',
        'E-mail é obrigatório',
        'Senha é obrigatória'
    ]

    before(function() {
        signupPage.go()
        signupPage.submit()
    })
    alertMessages.forEach(function (alert) {
        it('deve exibir' + alert.toLowerCase(), function () {
            signupPage.alert.haveText(alert)
        })

    })




})


