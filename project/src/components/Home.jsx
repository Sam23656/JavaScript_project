import React, { useState } from 'react';
import Header from './Header';
import Search_Results from './SearchResults';
import AudioPlayer from './AudioPlayer';

function Home() {
  const [SearchItems, setSearchItems] = useState([]);
  const [Filter, setFilter] = useState([
    {
      name: "Все",
      checked: true
    },
    {
      name: "Треки",
      checked: false
    },
    {
      name: "Альбомы",
      checked: false
    },
    {
      name: "Артисты",
      checked: false
    },
    {
      name: "Плейлисты",
      checked: false
    }
  ]);
  const [Sound, setSound] = useState("");

  return (
    <div className="main">  
      <Header Filter={Filter} setFilter={setFilter} SearchItems={SearchItems} setSearchItems={setSearchItems} />
      <Search_Results setSound={setSound} Filter={Filter} SearchItems={SearchItems} />
      <footer>
        <AudioPlayer Sound={Sound} />
      </footer>
    </div>
  );
}

export default Home;
