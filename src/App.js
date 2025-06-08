import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Crops from './pages/Crops';
import Livestock from './pages/Livestock';
import Fisheries from './pages/Fisheries';
import Modernization from './pages/Modernization';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/crops">Crops</Link></li>
            <li><Link to="/livestock">Livestock</Link></li>
            <li><Link to="/fisheries">Fisheries</Link></li>
            <li><Link to="/modernization">Modernization</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="/livestock" element={<Livestock />} />
          <Route path="/fisheries" element={<Fisheries />} />
          <Route path="/modernization" element={<Modernization />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
