// import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Importing Components
import Header from './components/Header'
import HomePage from './components/HomePage'
import Projectpage from './components/Projectpage'
import Projects from './components/Projects'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/' element={<Header />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/' element={<Footer />} />
            <Route path='*' element={<div>404 Not Found</div>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
