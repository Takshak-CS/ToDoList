import React from 'react'
import TodoCard from './TodoCard'

function TodoList(props) {  
  return (
    <ul className="main">
      {props.todos.map((todo, index) => {
        return(
      <TodoCard  index={index} handleEdit={props.handleEdit} handleDelete={props.handleDelete} key={index}>
        <p>{todo}</p>
      </TodoCard>
    )})}
    </ul>
  )
}

export default TodoList;
