import login from '../fixtures/login.json'

describe('Login page with valid creds', () => {
    it('should return true when valid values given', () => {
        cy.login('karthika', 'karthika')
        const error = cy.get('#validLogin')
        expect(error).to.exist
    })
})

describe('Login page with invalid creds', () => {
    before(function () {
        cy.fixture('login').then(function (testdata) {
            this.testdata = testdata
        })
    })

    it('should throw error on invalid creds', function () {
        const { userName, password } = this.testdata
        cy.login(userName, password)
        const error = cy.get('#loginError')
        expect(error).to.exist
    })
})