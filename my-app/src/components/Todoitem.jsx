
const Todoitem = ({id, text, completed, toggleTodoComlete, removeTodo}) => {
  return (
    <li>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggleTodoComlete(id)}
            />
            <span>{text}</span>
            <span className="delete" onClick={() => removeTodo(id)}>
              &times;
            </span>
    </li>
  )
}

export default Todoitem