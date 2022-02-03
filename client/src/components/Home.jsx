import React, {useState} from 'react';
import Card from './Card';
import '../styles/Home.css';
import AddButton from './AddButton';
function Home(props) {
  const [cards, setCards] = useState([ ]);
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
}

export default Home;
