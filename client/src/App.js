import Home from './components/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import StarredMessages from './components/StarredMessages';
import MentionedMe from './components/MentionedMe';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import {Route, Routes, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import './styles/App.css';

import SearchBar from './components/SearchBar';
function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Navbar />
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
