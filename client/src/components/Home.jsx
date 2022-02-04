import React, {useState} from 'react';
import Card from './Card';
import '../styles/Home.css';
import AddButton from './AddButton';
import SearchBar from './SearchBar';
import Loading from './Loading';
import { useAuth0,withAuthenticationRequired } from "@auth0/auth0-react";


export default withAuthenticationRequired( function Home(props) {
  const [cards, setCards] = useState([ ]);
  const [ searchTerm, setSearchTerm ] = useState("");
  const { user, error, getIdTokenClaims } = useAuth0();

  const idToken = getIdTokenClaims()
  .then((e) => {return e.__raw});

  const helpSearch = (card) => {
    return (
      card.user.given_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      card.text.toLowerCase().includes(searchTerm.toLowerCase()) || 
      card.dedicated.toString().toLowerCase().includes(searchTerm.toLowerCase())
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
  onRedirecting: () => (<Loading />)
});
