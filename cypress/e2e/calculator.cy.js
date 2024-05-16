// Denna fil ska testa alla user stories som är relaterade till miniräknaren

// User stories
// 1. "som en användare, vill jag kunna räkna i appen med de vanliga räknesätten, för att jag inte vill räkna i huvudet"

describe('calculator', () => {
	it('can calculate using all 4 operator', () => {
		// skriv in 10
		// klicka på "+"   -> 10
		// skriv in 5
		// klicka på "-"   -> 5
		// klicka på "*"   -> 25
		// skriv in 2
		// klicka på "/"   -> 12.5
		// kontrollera att det är rätt resultat efter varje operation

		cy.visit('/')
		cy.get('[data-cy="number-input"]').type('{selectAll}10')
		cy.get('[data-cy="add-btn"]').click()
		cy.get('.result').then(element => {
			expect( element.text() ).to.equal('10')
		})

		// cy.get('[data-cy="number-input"]').clear()
		// cy.get('[data-cy="number-input"]').type('hellow{backspace}')
		cy.get('[data-cy="number-input"]').type('{selectAll}5')
		cy.get('[data-cy="subtract-btn"]').click()
		cy.get('.result').then(element => {
			expect( element.text() ).to.equal('5')
		})

		cy.get('[data-cy="multiply-btn"]').click()
		cy.get('.result').then(element => {
			expect( element.text() ).to.equal('25')
		})

		cy.get('[data-cy="number-input"]').type('{selectAll}2')
		cy.get('[data-cy="divide-btn"]').click()
		cy.get('.result').then(element => {
			expect( element.text() ).to.equal('12.5')
		})
	})
})