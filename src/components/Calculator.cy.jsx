import React from 'react'
import Calculator from './Calculator'

describe('<Calculator />', () => {
	beforeEach(() => {
		cy.mount(<Calculator />)
	})

	// 1. Det ska finnas en komponent med knappar för plus, minus, gånger och delat med; samt ett textfält för att skriva in tal. (komponenten ska renderas och vara synlig)
	it("shows a button for +, -, *, /, the result and an input-field", () => {
		cy.get('button').contains('+').should('be.visible')
		cy.get('button').contains('-').should('be.visible')
		cy.get('button').contains('*').should('be.visible')
		cy.get('button').contains('/').should('be.visible')
		cy.get('input[type="number"]').should('be.visible')
	})

	// 2. Komponenten ska initialt visa att resultatet är noll.
	it('displays the result 0 initially', () => {
		cy.get('.result')
			.and('be.visible')
			.then(resultElement => {
				// cy.log(resultElement.text())
				const text = resultElement.text()
				expect(text).to.equal('0')
			})
	})
	// Två sätt att plocka ut texten ur ett element:
	// .invoke('text').then(text => {})
	// .then(element => { element.text() })
})

/*
User story: "som en användare, vill jag kunna räkna i appen med de vanliga räknesätten, för att jag inte vill räkna i huvudet"
Acceptanskriterier:
1. Det ska finnas en komponent med knappar för plus, minus, gånger och delat med; samt ett textfält för att skriva in tal. (komponenten ska renderas och vara synlig)
2. Komponenten ska initialt visa att resultatet är noll.
3. När man skriver in ett tal och klickar på plusknappen, ska resultatet ökas med det skrivna talet.
4. När man skriver in ett tal och klickar på minusknappen, ska resultatet minskas med det skrivna talet.
5. När man skriver in ett tal och klickar på multiplikationsknappen, ska resultatet gångras med det skrivna talet.
6. När man skriver in ett tal och klickar på divisionsknappen, ska resultatet delas med det skrivna talet.
*/
