import { useState } from 'react'
import './App.css'
import Login from './components/Login.jsx'

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





		</main>
		</>
	)
}

export default App
