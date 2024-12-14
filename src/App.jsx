//import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import NotesPage from './pages/NotesPage';
function App() {
  

  return (
      <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/notes' element={<NotesPage/>}/>
        </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
