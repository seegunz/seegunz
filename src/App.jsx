import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Nav } from './components/index'
import './App.css'
import Home from './pages/Home'
import Bio from './pages/Bio'
import Portfolio from './pages/Portfolio'
import Footer from './components/nav/Footer'

export default function App() {
  return (
    <div>
      <Router>
        <Nav />
        <div className='pt-32'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/bio' element={<Bio />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}
