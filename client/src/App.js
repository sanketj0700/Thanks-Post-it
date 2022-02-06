import {useState} from  'react';
import Home from './components/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import StarredMessages from './components/StarredMessages';
import MentionedMe from './components/MentionedMe';
import Login from './components/Login';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './styles/App.css';

function App() {

  const [user, setUser] = useState('Karan');
  return (
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/home" exact element={<Home user = {user}/>} />
            <Route path="/" exact element={<Login />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/starredmessages" exact element={<StarredMessages />} />
            <Route path="/mentionedme" exact element={<MentionedMe />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

