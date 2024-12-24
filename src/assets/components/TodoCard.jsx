import React from 'react'

function TodoCard(props) {
  //const {children}=props;   //destructuring not included since props.children is used directly and makes more sense.
  return (
    <li className="todoItem">{props.children}
      <div className='actionsContainer' >
        <button onClick={()=>{
        props.handleEdit(props.index);
      }}><i class="fa-solid fa-pen-to-square"></i></button>
      
      <button onClick={()=>{
        props.handleDelete(props.index);
      }}><i class="fa-solid fa-trash"></i></button>
      </div>
      </li>
  )
}

export default TodoCard;
