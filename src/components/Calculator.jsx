import { useState } from "react"


const Calculator = () => {
	const [result, setValue] = useState(0)
	const [numberInput, setNumberInput] = useState(0)

	const handleAdd = () => setValue(result + numberInput)
	const handleSubtract = () => setValue(result - numberInput)
	const handleMultiply = () => setValue(result * numberInput)
	const handleDivide = () => setValue(result / numberInput)

	return (
		<div className="calculator">
			<button data-cy="add-btn" onClick={handleAdd}> + </button>
			<button data-cy="subtract-btn" onClick={handleSubtract}> - </button>
			<button data-cy="multiply-btn" onClick={handleMultiply}> * </button>
			<button data-cy="divide-btn" onClick={handleDivide}> / </button>
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
