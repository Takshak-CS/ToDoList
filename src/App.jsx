import TodoList from "./assets/components/TodoList"
import TodoInput from "./assets/components/TodoInput";
import {useState} from 'react'
function App() {
  // const [Todos,setTodos]= useState(["go to gym"]) 
  // const todos=["go to the gym",
  //           "cut your nails"
  // ]

  const [todos,setTodos]=useState(["go to the gym",
                                    "cut your nails",
                                    "take a bath",])
 return(
  
  <>
    <TodoInput todos={todos}/>
    <TodoList todos={todos}/>
  </>
 )
}
export default App;