const TodoList = () => {

	return (
		<div className="todo-list">
			<input type="text" data-cy="todo-input" />
			<button data-cy="todo-save"> Save me </button>
			<ul data-cy="todo-list-items"></ul>
		</div>
	)
}

export default TodoList
