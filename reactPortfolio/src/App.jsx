// import { useState } from 'react'
import React from 'react'

import Header from './components/Header'
import Homepage from './components/Homepage'
import Projectpage from './components/Projectpage'
import Projects from './components/Projects'
import ContactPage from './components/ContactPage'

function App() {
  return (
    <div className='App'>
      <Homepage />
      <Header />
      <Projectpage />
      <Projects />
      <ContactPage />
    </div>
  )
}

export default App
