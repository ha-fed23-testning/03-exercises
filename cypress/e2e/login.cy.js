// Denna fil ska testa alla user stories som är relaterade till "login" funktionaliteten

// 1. "som en användare, vill jag skriva in mitt namn, så att jag vet att jag är inloggad när namnet visas i appen"
describe('login', () => {
	it('can log in and log out', () => {
		// skriv in användarens namn
		// logga in (klicka på login-knappen)
		// kontrollera att namnet visas
		// logga ut
		// kontrollera att namnet inte visas längre
		const username = 'Pernilla'

		cy.visit('/')
		cy.get('[data-cy="login-name"]').type(username)
		cy.get('[data-cy="login-button"]').click()
		cy.get('[data-cy="display-name"]').then(element => {
			expect( element.text().trim() ).to.equal('Välkommen ' + username)
			cy.get('[data-cy="login-button"]').click()
			cy.get('[data-cy="display-name"]').then(element => {
				expect( element.text() ).not.contains(username)
			})
		})
	})
})
