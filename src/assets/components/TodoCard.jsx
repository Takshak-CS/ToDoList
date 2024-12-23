import React from 'react'

function TodoCard(props) {
  //const {children}=props;   //destructuring not included since props.children is used directly and makes more sense.
  return (
    <li className="todoItem">{props.children}
      <div className='actionsContainer'>
      <i class="fa-solid fa-pen-to-square"></i>
      <i class="fa-solid fa-trash"></i>
      </div>
      </li>
  )
}

export default TodoCard;
