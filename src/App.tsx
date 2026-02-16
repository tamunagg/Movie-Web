import { useState } from 'react'
import './App.css'
import Header from './components/HeaderComponent/Header'
import MovieAd from './components/MovieAdComponent/MovieAd'

function App() {
  return (
    <div className='app' >
      <Header />
      <div className="content">

      <MovieAd />
      </div>
    </div>
  )
}

export default App
