import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import './App.css'

function App() {

  return (

      <div>
        
        <CreateTodo/>        
        <Todos todos = {[
          {
            title: "asd",
            description: "asd desc",
            completed: false
          }
          // {
          //   title: "fgh",
          //   description: "fgh desc",
          //   completed: false
          // },
          // {
          //   title: "jkl",
          //   description: "jkl desc",
          //   completed: false
          // },
          // {
          //   title: "zxc",
          //   description: "zxc desc",
          //   completed: true
          // }
        ]}/>
      </div>

  )
}

export default App
