import { useState, useEffect } from "react"
import { TodoForm } from "./TodoForm"
import { TodoContainer } from "./TodoContainer"


export const TodoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    let newTodo = [...todos, todo]
    setTodos(newTodo)
    localStorage.setItem('todos', JSON.stringify(newTodo))
  }

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id)

    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const completeTodo = (id) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })

    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos'))

    if(localTodos) setTodos(localTodos)
  }, [])
 
  return (
    <div className="container">
      <TodoForm addTodo={addTodo}/>
      <TodoContainer todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} setTodos={setTodos}/>
    </div>
  )

}