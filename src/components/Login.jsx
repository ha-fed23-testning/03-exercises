import { useState } from 'react'

const Login = () => {
	const [name, setName] = useState('')
	const [savedName, setSavedName] = useState('gäst')

	const handleClick = () => {
		// Olika strängar betyder att användaren skrivit något nytt och vill spara det nya namnet
		if( savedName === name ) {
			setSavedName('gäst')
		} else {
			setSavedName( name )
		}
	}

	return (
		<div className="login">
			<h2 data-cy="display-name"> Välkommen {savedName} </h2>
			<section className="form">
				<label> Namn </label>
				<input type="text"
					data-cy="login-name"
					placeholder="gäst"
					value={name}
					onChange={e => setName(e.target.value)}
					/>
				<button
					data-cy="login-button"
					onClick={handleClick}> {savedName === 'gäst' ? 'Spara namn' : 'Logga ut'} </button>
			</section>
		</div>
	)
}
export default Login
