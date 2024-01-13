import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './CreateTodo'
import { CreateTodo } from './CreateTodo'
import { Todo } from './Todo'

function App() {
  const [count, setCount] = useState(0)
  // const [todos,settodos]=useState([])

const todos=
  [
   { title: "disha",
    description: "disha learns web dev",
    completed: false
  }
  ]

  return (
   <div>
  
    <CreateTodo></CreateTodo>
    <Todo todos = {todos}></Todo>
   </div>
  )
}

export default App
