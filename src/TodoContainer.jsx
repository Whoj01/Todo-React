import { useEffect, useState } from "react"
import { TodoItem } from "./TodoItem"



export const TodoContainer = ({todos, deleteTodo, completeTodo, setTodos}) => {
  const [inDrag, setInDrag] = useState(null)

  const drag = (event) => {
    const id = Number(event.target.id)
    setInDrag(id)
  }

  const drop = ({target}) => {
    if (!target.classList.contains('todoRow')) return
    const find = todos.findIndex(todo => todo.id == inDrag) 
    const findDropTarget = todos.findIndex(todo => todo.id == Number(target.id))
    console.log(find)
    const tempTodos = [...todos]
    
    const itemDrag = tempTodos.splice(find, 1)

    console.log('antes :', tempTodos)
    
    tempTodos.splice(findDropTarget, 0, itemDrag[0])
    
    setTodos(tempTodos)
    localStorage.setItem('todos', JSON.stringify(tempTodos))


  }

  useEffect(() => {
    console.log(inDrag)
  }, [inDrag])


  return (
    
    <div className="todoContainer">
      
     {todos.length === 0 && <p className="noTodos">Ensira uma tarafa para aparecer aqui!</p>}
     {todos.length > 0 && todos.map(todo => {
      return (
        <TodoItem 
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          drag={drag}
          drop={drop}
        />
      )
     })}
    </div>
  )
}