import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Search_Results from './components/SearchResults'
function App() {
  const [SearchItems, setSearchItems] = useState([])
  const [Filter, setFilter] = useState([
    {
        name:"Все",
        checked:false
    },
    {
        name:"Треки",
        checked:false
    },
    {
        name:"Альбомы",
        checked:false
    },
    {
        name:"Артисты",
        checked:false
    },
    {
        name:"Плейлисты",
        checked:false
    }
])

  return (
    <div className="main">  
        <Header Filter={Filter} setFilter={setFilter} SearchItems={SearchItems} setSearchItems={setSearchItems} />
        <Search_Results SearchItems={SearchItems} />
    </div>
  )
}

export default App
