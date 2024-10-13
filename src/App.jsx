import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Nav } from './components/index'
import './App.css'
import Home from './pages/Home'

export default function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
      </Router>
    </div>
  )
}
