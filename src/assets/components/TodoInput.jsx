import React from 'react';


function TodoInput(props) {

   //const [todoValue, setTodoValue] = React.useState("");
  return (
    <header>
      <input value={props.todoValue} onChange={(e) => { props.setTodoValue(e.target.value) }
      } placeholder="Enter ToDo" />
      <button onClick={() => {     //here the parent prop handleAdd is passed to the children components  and used as a callback function in the button add.
        if(props.todoValue==""){
          window.alert("please insert a task!!");
          props.setTodoValue("");
        }
        else{
        props.handleAdd(props.todoValue)
        props.setTodoValue("");
        }
      }}>Add</button>
    </header>
  )
}


export default TodoInput;