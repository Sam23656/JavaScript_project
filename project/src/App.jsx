import './App.scss'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </Router>
  </div>
);

export default App;
