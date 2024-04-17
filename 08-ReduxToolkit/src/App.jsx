import React, { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  
  const [updateText,setUpdateText] = useState(null)
  
  const handleUpdate = (todo) => {
    console.log(updateText)
    setUpdateText(todo)
    console.log(updateText)
  }
  

  return (
    <div>
      <AddTodo updateText={updateText} setUpdateText={setUpdateText}/>
      <Todos handleUpdate={handleUpdate}/>
    </div>
  )
}

export default App