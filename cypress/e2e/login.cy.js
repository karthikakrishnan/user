import login from '../fixtures/login.json'

describe('Login page', () => {
    it('should return true', () => {
        cy.login()
    })
    it('should return false when invalid values given', () => {
        // cy.fixture('login').then((userFixture) => {
        //     cy.login()
        //   const errorElement = cy.get('#loginError')
        //   expect(errorElement).should('be.visible')
        // })
        cy.login()
        const error = cy.get('#loginError')
        expect(error).to.exist
    })
})