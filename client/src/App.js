import {useState} from  'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './styles/App.css';
import SearchBar from './components/SearchBar';
function App() {

  const [user, setUser] = useState('Karan');
  return (
    <div className="App">
        <Navbar />
        <Home user = {user}/>
    </div>
  );
}

export default App;
