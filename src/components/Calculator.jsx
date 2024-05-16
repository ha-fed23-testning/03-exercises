import { useState } from "react"


const Calculator = () => {
	const [result, setValue] = useState(0)
	const [numberInput, setNumberInput] = useState(0)

	const handleAdd = () => setValue(result + numberInput)

	return (
		<div className="calculator">
			<button onClick={handleAdd}> + </button>
			<button> - </button>
			<button> * </button>
			<button> / </button>
			<input
				data-cy="number-input"
				type="number"
				value={numberInput}
				onChange={e => setNumberInput(Number(e.target.value))}
				/>
			<code className="result">{result}</code>
		</div>
	)
}
export default Calculator
