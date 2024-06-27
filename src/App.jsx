import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Show from './Components/Show'
import New from './Components/New'
import Edit from './Components/Edit'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <div>
     <NavBar />
     <Routes>
       <Route path="/" element={<Navigate to="/bookmarks" replace/>} />
       <Route path="/bookmarks" element={<Home />}/>
       <Route path="/bookmarks/new" element={<New />}/>
       <Route path="/bookmarks/:index" element={<Show />}/>
       <Route path="/bookmarks/:index/edit" element={<Edit />}/>
     </Routes>
    </div>
  )
}

export default App
