import { useState } from 'react'
import './App.css'
import Login from './components/Login.jsx'
import Calculator from './components/Calculator.jsx'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
		<header>
			<nav>
				<div className="selected"> Logga in </div>
				<div> Miniräknare </div>
				<div> Todo-lista </div>
				<div> Kundvagn </div>
			</nav>
		</header>
		<main>
			<Login />
			<TodoList />
			<Calculator />

		</main>
		</>
	)
}

export default App
