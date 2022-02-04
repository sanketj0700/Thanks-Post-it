import React, {useState, useEffect} from 'react';
import Card from './Card';
import '../styles/Home.css';
import AddButton from './AddButton';
import SearchBar from './SearchBar';
import { useAuth0,withAuthenticationRequired } from "@auth0/auth0-react";
import axios from 'axios';


export default withAuthenticationRequired( function Home(props) {
  const [cards, setCards] = useState([ ]);
  const [ searchTerm, setSearchTerm ] = useState("");
  const { user, error, getIdTokenClaims } = useAuth0();
  // on first load get all cards
  useEffect(() => {
    getIdTokenClaims().then((e)=>{
        axios.get('https://thanks-post-it.herokuapp.com/message/read', {
        headers: {
          Authorization: `Bearer ${e.__raw}`
        }
      }).then(res => {
        console.log(res.data);
      });
    })
  });


  const helpSearch = (card) => {
    return (
      card.user.given_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      card.text.toLowerCase().includes(searchTerm.toLowerCase()) || 
      card.dedicated.map(person=>person.given_name).toString().toLowerCase().includes(searchTerm.toLowerCase())||
      card.badges.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <>
    <SearchBar  onChange={(e) => {setSearchTerm(e.target.value)}}/>
    <div className='home-container'>
      {cards.filter((card) => {
          if (searchTerm === "") {
              return card;
          } else if(helpSearch(card)) {
              return card;
          }
          return null;
      }).map(card => (
        <Card key={card.id} card = {card} user = {user}/>
      ))}
    </div>
     <AddButton cards = {cards} setCards = {setCards} loggedInUser = {user}/>
     </>
  );
}, {
  onRedirecting: () => (<div>Loading...</div>)
});
