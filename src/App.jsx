import { useState } from 'react'
import './App.css'

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
			<h2> Välkommen gäst </h2>
			<section className="form">
				<label> Namn </label>
				<input type="text" value="Kalle" />
				<button> Spara namn </button>
			</section>




		</main>
		</>
	)
}

export default App
