import React from 'react'  
import Starting from './Pages/Starting'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home' 
import About from './Pages/About'
import Project from './Pages/Projects'
import NotFound from './Pages/Notfound' 
 

const App = () => { 
 

  return (
  <BrowserRouter>
  <Routes>
    <Route path="" element={<Starting/>} />
     <Route path="/home" element={<Home/>}/>
     <Route path="/about" element={<About/>}/> 
     <Route path="/projects" element={<Project/>}/>
     <Route path="*" element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App