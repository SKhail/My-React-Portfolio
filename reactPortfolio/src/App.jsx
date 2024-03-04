// import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Importing Components
import Header from './components/Header'
import Homepage from './components/Homepage'
import HeroSection from './components/HeroSection'
import Projectpage from './components/Projectpage'
import Projects from './components/Projects'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Homepage />
      <Header />
      <HeroSection />
      <Projectpage />
      <Projects />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default App
