import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Nav } from './components/index'
import './App.css'

export default function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  )
}
