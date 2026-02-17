import { useState } from 'react'
import './App.css'
import Header from './components/HeaderComponent/Header'
import MovieAd from './components/MovieAdComponent/MovieAd'
import SearchRow from './components/SearchRowComponent/SearchRow'
import MovieCardList from './components/MovieCardComponent/MovieCardList'
import movieData from './data/mock-data.json' 
 

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string | number>('');
  return (

    <div className='app' >
      <Header />

      <div className="content">
      <MovieAd data={movieData.featured}/>
      <h2>Recommended</h2>
      <SearchRow 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />

      <MovieCardList 
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        selectedYear={selectedYear}
      />
      </div>

    </div>
  )
}

export default App
