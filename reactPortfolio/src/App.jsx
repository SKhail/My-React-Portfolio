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
            <Route path='/' element={<HomePage />}></Route>
            <Route path='*' element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>

      {/* <Homepage />
      <Header />
      <HeroSection />
      <Projectpage />
      <Projects />
      <ContactPage />
      <Footer /> */}
    </div>
  )
}

export default App
