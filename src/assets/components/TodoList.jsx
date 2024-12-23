import React from 'react'
import TodoCard from './TodoCard'

function TodoList() {

  
  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return(
      <TodoCard key={index}>
        <p>{todo}</p>
      </TodoCard>
    )})}
    </ul>
  )
}

export default TodoList;
