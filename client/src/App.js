import {useState} from  'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './styles/App.css';
import SearchBar from './components/SearchBar';
import AddButton from './components/AddButton';
function App() {

  const [user, setUser] = useState('Karan');
  const [cards, setCards] = useState([ ]);
  return (
    <div className="App">
      <AddButton cards = {cards} setCards = {setCards}/>
        <Navbar />
        <Home user = {user} cards = {cards} setCards = {setCards}/>
    </div>
  );
}

export default App;
