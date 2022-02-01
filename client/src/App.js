import Home from './components/Home';
import Navbar from './components/Navbar';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './styles/App.css';
import SearchBar from './components/SearchBar';
function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
    </div>
  );
}

export default App;
