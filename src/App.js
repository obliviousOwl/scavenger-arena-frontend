
import './App.css';
import AppNavBar from './components/AppNavbar';
import Leaderboards from './pages/Leaderboards';
import GamePage from './pages/GamePage';
import HowToPlay from './pages/HowToPlay';
import MatchRecords from './pages/MatchRecords';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
            <AppNavBar />
            <Routes>
                <Route path="/" element={<GamePage />}></Route>
                <Route path="/Leaderboards" element={<Leaderboards />}></Route>
                <Route path="/HowToPlay" element={<HowToPlay />}></Route>
                <Route path="/MatchRecords" element={<MatchRecords />}></Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
