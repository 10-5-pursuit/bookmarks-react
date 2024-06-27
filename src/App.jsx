import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Show from './Components/Show'
import New from './Components/New'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
     <NavBar />
     <Routes>
       <Route path="/bookmarks" element={<Home />}/>
       <Route path="/bookmarks/new" element={<New />}/>
       <Route path="/bookmarks/:index" element={<Show />}/>
     </Routes>
    </div>
  )
}

export default App
