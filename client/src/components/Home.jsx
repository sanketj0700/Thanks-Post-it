import React from 'react';
import Card from './Card';
import '../styles/Home.css';
function Home(props) {
  
  return (
    <div className='home-container'>
      {props.cards.map(card => (
        <Card key={card.id} card = {card} user = {props.user}/>
      ))}
    </div>
  );
}

export default Home;
