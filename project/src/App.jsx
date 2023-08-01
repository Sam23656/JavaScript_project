import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Search_Results from './components/SearchResults'
function App() {
  const [SearchItems, setSearchItems] = useState([])
  return (
    <div className="main">  
        <Header SearchItems={SearchItems} setSearchItems={setSearchItems} />
        <Search_Results SearchItems={SearchItems} />
    </div>
  )
}

export default App
