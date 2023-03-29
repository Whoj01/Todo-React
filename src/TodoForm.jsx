import { useState, useRef, useEffect} from "react"


export const TodoForm = ({ addTodo }) => {
  const [content, setContent] = useState('')
  const inputTodo = useRef()

  useEffect(() => {
    inputTodo.current.classList.remove('error')

  }, [content])
  
  const createTodo = (e) => {
    e.preventDefault()
    const id = Math.floor(Math.random() * 1000)
    if (!content || /^\s*$/.test(content)) {
      inputTodo.current.classList.add('error')
      inputTodo.current.focus()
      return
    };
    
    const newTodo = {
      id,
      content,
      completed: false
    }

    addTodo(newTodo)
    setContent("")
    inputTodo.current.focus()
  }
  

  return (
    <div className="formContainer">
      <form onSubmit={(event) => {createTodo(event)}}>
        <input 
          type="text" 
          placeholder="Digite sua tarefa..." 
          className="todoInput"
          value={content}
          onChange={({ target }) => setContent(target.value)}
          ref={inputTodo}
          />
          
        <button 
        className="todoButton"
        >
          Adicionar
        </button>
      </form>
      
    </div>
  )
}