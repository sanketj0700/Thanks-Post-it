import React, {useEffect, useState} from 'react';
import '../styles/MentionedMe.css';
import axios from 'axios';
import Card from './Card';

function MentionedMe() {
  const loggedInUser = JSON.parse(localStorage.getItem('user'));
  // const mentionedMeId = loggedInUser.email;
  
  const [mentionedCards, setMentionedCards] = useState([]);
  const [peopleOptions, setPeopleOptions] = useState([]);

  const url = process.env.REACT_APP_ENV === 'production'? 'https://thanks-post-it-backend.herokuapp.com' : 'http://localhost:8080';
  useEffect(()=>{
    const config = {
      mode: 'cors',
      headers: {
        'Authorization' : `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }
    const body = {
      email: loggedInUser.email
    }
    //get all mentioned me posts
    axios.post(`${url}/message/mentioned`, body, config).then(res => {
      setMentionedCards(res.data.data);
      console.log(res.data.data);
    });

    // get people options
    axios.get(`${url}/user/`, config).then(res => {
      setPeopleOptions(res.data.data);
    });


  }, []);

  if(mentionedCards.length === 0 || peopleOptions.length === 0) {
   <div>You were not mentioned in any post!</div>
  }
  return (
    <div className="mentioned-me">
      {mentionedCards.map((card, index) => {
        return(
          <Card key={index} card = {card} user = {loggedInUser} peopleOptions = {peopleOptions}/>
        )
      })}

    </div>
  )
}

export default MentionedMe;

