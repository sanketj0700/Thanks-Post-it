import {useState} from  'react';
import Home from './components/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import StarredMessages from './components/StarredMessages';
import MentionedMe from './components/MentionedMe';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import {Route, Routes, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import './styles/App.css';

import SearchBar from './components/SearchBar';
import AddButton from './components/AddButton';
function App() {

  const [user, setUser] = useState('Karan');
  const [cards, setCards] = useState([ ]);
  return (
      <div className="App">
        <AddButton cards = {cards} setCards = {setCards}/>
        <BrowserRouter>
        <Navbar />
        <Home user = {user} cards = {cards} setCards = {setCards}/>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/starredmessages" exact element={<StarredMessages />} />
            <Route path="/mentionedme" exact element={<MentionedMe />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
