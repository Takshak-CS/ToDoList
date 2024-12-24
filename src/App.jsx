import TodoList from "./assets/components/TodoList"
import TodoInput from "./assets/components/TodoInput";
import {useState,useEffect} from 'react'
function App() {
  // const [Todos,setTodos]= useState(["go to gym"]) 
  // const todos=["go to the gym",
  //           "cut your nails"
  // ]

  const [todos,setTodos]=useState([])
  const [todoValue,setTodoValue]=useState("");

  function saveToLocalStorage(todos){
    localStorage.setItem("todos",JSON.stringify(todos));   //evertime we set the todos list i.e add,delete or edit it we save it to the local storage
  }
  const handleAdd=(newTodos)=>{
    const newTodoList=[...todos,newTodos];
    saveToLocalStorage(newTodoList);
    setTodos(newTodoList);               //used to add a new task to the list
  }
  
  const handleDelete=(index)=>{
    const newTodoList=todos.filter((todo,i)=>i!==index)
    saveToLocalStorage(newTodoList);
    setTodos(newTodoList);

  }

  const handleEdit=(index)=>{
   const valueToBeEdited=todos[index];
   setTodoValue(valueToBeEdited);
   handleDelete(index);  //this will delete the task from the list and then we can add the edited task to the list whenever the edit button is pressed in the card component.

  }

  useEffect(()=>{  //we have given empty array as second argument so that it runs only once when the component is mounted that means wverytime the page loads it retains the todos list as we get it from the local storage.
    if(!localStorage){
      return
    }
    else{
      let localTodos=localStorage.getItem("todos");
      if(localTodos){
        setTodos(JSON.parse(localTodos))
      }
    }
  },[])
 return(
  
  <>
    <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAdd={handleAdd} todos={todos}/>
    <TodoList handleEdit={handleEdit} handleDelete={handleDelete} todos={todos}/>
  </>
 )
}
export default App;