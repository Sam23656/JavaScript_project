import './App.scss'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Album from './components/Album';
import { useEffect, useState } from 'react';

function App(){
  const [Uri, setUri] = useState({
    name: "",
    uri: ""
  })

  useEffect(() => {
    const uriString = encodeURIComponent(JSON.stringify(Uri));
    if (Uri.name == "Альбомы") {
      window.location.replace(`/Album?uri=${uriString}`);
    }
  }, [Uri]); 
  return(
  <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Home   setUri={setUri}/>} />
      <Route path="/Album" element={<Album/>} />
    </Routes>
    </Router>
  </div>
  )
}

export default App;
