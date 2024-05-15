import React from 'react'
import Login from './Login'

describe('<Login />', () => {
	beforeEach(() => {
		cy.mount(<Login />)
	})
	// it('renders', () => {
	// 	// see: https://on.cypress.io/mounting-react
	// 	cy.mount(<Login />)
	// })

	it('contains a text field and a button', () => {
		cy.get('input').should('be.visible')
		// cy.get('button').contains('Spara namn').should('be.visible')
		cy.get('button').invoke('text').then(text => {
			expect( text.toLowerCase() ).to.have.string('spara namn')
			// .to.equal för att testa "lika med"
			// .have.string fungerar som "includes"
		})
	})


	// 3. När användaren skriver in sitt namn i textfältet och klickar på button, ska namnet visas som en rubrik i komponenten.
	it("displays the users' entered name", () => {
		// Variabler hjälper oss att eliminera "stava fel"-buggar
		const name = 'Hermione'
		cy.get('input').type(name)
		cy.get('button').click()
		cy.get('h2').invoke('text').then(text => {
			expect( text ).to.have.string(name)
		})
	})
})

/*
2 Skapa en komponent där en användare kan identifiera sig genom att skriva in sitt namn.
User story: "som en användare, vill jag skriva in mitt namn, så att jag vet att jag är inloggad när namnet visas i appen".

Acceptanskriterier:
1. Det ska finnas en komponent som innehåller ett textfält (input) för användarens namn
2. Det ska finnas en komponent som innehåller en button med texten "Spara namn".
3. När användaren skriver in sitt namn i textfältet och klickar på button, ska namnet visas som en rubrik i komponenten.
4. När användaren har skrivit in sitt namn, ska texten på button ändras till "Logga ut".
5. När man klickar på knappen för att logga ut, ska användarens namn inte längre visas.

*/