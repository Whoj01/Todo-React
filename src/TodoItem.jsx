import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
export const TodoItem = ({todo, deleteTodo, completeTodo, drag, drop}) => {

  return (
    <div 
    className="todoRow" 
    id={todo.id} 
    draggable 
    onDrag={(event) => drag(event)}
    onDragOver={(e) => e.preventDefault()}
    onDrop={(event) => drop(event)}
    >
      <p 
      className={`${todo.completed ? 'todoText completed' : 'todoText'}`} 
      onClick={() => completeTodo(todo.id)}
      >
        {todo.content}
      </p>
      <FontAwesomeIcon icon={faTrashAlt} className="icon" onClick={() => deleteTodo(todo.id)} />
    </div>
  )
}