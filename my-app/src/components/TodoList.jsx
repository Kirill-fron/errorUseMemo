import {useSelector} from 'react-redux'
import Todoitem from "./Todoitem"
const TodoList = () => {
const todos = useSelector(state => state.todos.todos)

  return (
    <ul>
        {
            todos.map(todo => <Todoitem key={todo.id}
            
                {...todo} />)
        }
    </ul>
  )
}

export default TodoList