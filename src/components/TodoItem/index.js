// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, click} = props
  const {title, id} = todoList

  const clickButton = () => {
    click(id)
  }

  return (
    <li className="listItem">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={clickButton}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
