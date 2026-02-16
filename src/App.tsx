import { useState } from 'react'
import './App.css'
import Header from './components/HeaderComponent/Header'
import MovieAd from './components/MovieAdComponent/MovieAd'
import SearchRow from './components/SearchRowComponent/SearchRow'

function App() {
  return (
    <div className='app' >
      <Header />
      <div className="content">

      <MovieAd />
      <h2>Recommended</h2>
      <SearchRow />
      </div>
    </div>
  )
}

export default App
