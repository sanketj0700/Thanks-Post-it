import React, {useState} from 'react';
import Card from './Card';
import '../styles/Home.css';
import AddButton from './AddButton';
import { useAuth0,withAuthenticationRequired } from "@auth0/auth0-react";


export default withAuthenticationRequired( function Home(props) {
  const [cards, setCards] = useState([ ]);
  const { user, error, getIdTokenClaims } = useAuth0();

  const idToken = getIdTokenClaims()
  .then((e) => {return e.__raw});

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <>
    <div className='home-container'>
      {cards.map(card => (
        <Card key={card.id} card = {card} user = {props.user}/>
      ))}
    </div>
     <AddButton cards = {cards} setCards = {setCards}/>
     </>
  );
}, {
  onRedirecting: () => (<div>Loading...</div>)
});
