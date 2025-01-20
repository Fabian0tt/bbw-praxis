import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Fussball from './Fussball';
import Galerie from './Galerie';
import Regeln from './Regeln';
import Tips from './Tips';
import Position from './Position';
import './App.css';


function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/fussball">Fussball</Link>
                    <Link to="/galerie">Galerie</Link>
                    <Link to="/regeln">Regeln</Link>
                    <Link to="/tips">Tips</Link>
                    <Link to="/position">Position</Link>
                </nav>
                <Routes>
                    <Route path="/fussball" element={<Fussball/>}/>
                    <Route path="/galerie" element={<Galerie/>}/>
                    <Route path="/regeln" element={<Regeln/>}/>
                    <Route path="/tips" element={<Tips/>}/>
                    <Route path="/position" element={<Position/>}/>
                </Routes>
            </div>
        </Router>

    );
}

export default App;
