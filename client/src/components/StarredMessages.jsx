import React, {useEffect, useState} from 'react';
import '../styles/StarredMessages.css';
import axios from 'axios';
import Card from './Card';
import '../styles/StarredMessages.css';
function StarredMessages() {
  const loggedInUser = JSON.parse(localStorage.getItem('user'));
  const starredMessagesId = loggedInUser.starred;

  const [starredMessages, setStarredMessages] = useState([]);
  const [peopleOptions, setPeopleOptions] = useState([]);

  const url = process.env.REACT_APP_ENV === 'production'? 'https://thanks-post-it-backend.herokuapp.com' : 'http://localhost:5000';
  useEffect(() => {

    const body = {
      starred: starredMessagesId
    }
    const config = {
      mode: 'cors',
      headers: {
        'Authorization' : `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }
    //get starred messages
    axios.post(`${url}/message/starredMessages`, body, config).then(res => {
      setStarredMessages(res.data.msg);
    });
    // get people options
    axios.get(`${url}/user/`, config).then(res => {
      setPeopleOptions(res.data.data);
    });

  }, []);

  if(starredMessages.length === 0 || peopleOptions.length === 0) {
    <div>No starred post!</div>
  }
  return (
    <div className="starred-messages">
      {
        starredMessages.map(card => (
          <Card key={card._id} card = {card} user = {loggedInUser} peopleOptions = {peopleOptions}/>
        ))
      }
    </div>
  );
}

export default StarredMessages;

