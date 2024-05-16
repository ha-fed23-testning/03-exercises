/*
4 Skapa en TODO-lista-komponent. Komponenten ska visa en lista med de saker användaren skrivit in. Man ska kunna lägga till nya element.
"Som en användare vill jag kunna skriva in saker jag behöver göra, för att appen ska hjälpa mig att komma ihåg dem."
Det ska finnas en Todo-lista-komponent
Listan i komponenten ska initialt vara tom
När användaren skriver in ett värde och klickar på en knapp med texten "Lägg till", ska en "todo" med användarens text läggas till sist i listan.
*/

import TodoList from "./TodoList"

describe('todo list', () => {
	// Acceptanskriterier:
	// 1. det ska finnas ett inputfält som användaren kan skriva i
	// 2. det ska finnas en knapp för att spara (lägga till) en ny todo
	it('should have an input field for writing and a button for saving', () => {
		cy.mount( <TodoList /> )
		cy.get('[data-cy="todo-input"]').should('be.visible')
		cy.get('[data-cy="todo-save"]').should('be.visible')
	})


	// 3. initialt ska listan visa 0 element
	it('should display 0 elements in the list of todos initially', () => {
		cy.mount( <TodoList /> )
		cy.get('[data-cy="todo-list-items"]').should('be.empty')
	})

	// 4. Värdet i input ska visas sist i en lista på sidan, efter att man klickat på spara-knappen

})