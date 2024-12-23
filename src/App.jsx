import TodoList from "./assets/components/TodoList"
import TodoInput from "./assets/components/TodoInput";
import {useState} from 'react'
function App() {
  useState(Todos,setTodos) = [
    `Go to the gym`,
    `Eat more fruits and vege`,
    `Pick up the kids from school`
  ]
 return(
  
  <>
    <TodoInput todos={Todos}/>
    <TodoList todos={Todos}/>
  </>
 )
}
export default App;