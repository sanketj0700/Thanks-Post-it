import React from 'react';
import Card from './Card';
import '../styles/Home.css';
function Home(props) {
  const cards = [
    {
      id: 1,
      title: 'Thank you Sanket',
      user: 'Karan',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus eos, quisquam error ullam suscipit, perferendis natus sapiente nulla illum modi itaque eius neque adipisci molestias voluptatum esse quia nobis...',
      badges: ['gold', 'silver', 'bronze'],
      dedicated: ['Sanket']
    },
    {
      id: 2,
      title: 'Thank you Karan',
      user: 'Sanket',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus eos, quisquam error ullam suscipit, perferendis natus sapiente nulla illum modi itaque eius neque adipisci molestias voluptatum esse quia nobis...',
      badges: ['diamond', 'platinum', 'gold', 'silver', 'bronze'],
      dedicated: ['Karan']
    },
    {
      id: 3,
      title: 'Thank you Mihir',
      user: 'Karan',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus eos, quisquam error ullam suscipit, perferendis natus sapiente nulla illum modi itaque eius neque adipisci molestias voluptatum esse quia nobis...',
      badges: ['diamond', 'platinum', 'gold', 'bronze'],
      dedicated: ['Mihir']
    },
    {
      id: 4,
      title: 'Thank you Dhanvi',
      user: 'Mihir',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus eos, quisquam error ullam suscipit, perferendis natus sapiente nulla illum modi itaque eius neque adipisci molestias voluptatum esse quia nobis...',
      badges: ['bronze', 'gold'],
      dedicated: ['Dhanvi']
    },
    {
      id: 5,
      title: 'Thank you Dhanvi',
      user: 'Mihir',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus eos, quisquam error ullam suscipit, perferendis natus sapiente nulla illum modi itaque eius neque adipisci molestias voluptatum esse quia nobis...',
      badges: ['gold', 'platinum', 'diamond'],
      dedicated: ['Dhanvi']
    },
    {
      id: 6,
      title: 'Thank you Mihir',
      user: 'Dhanvi',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus eos, quisquam error ullam suscipit, perferendis natus sapiente nulla illum modi itaque eius neque adipisci molestias voluptatum esse quia nobis...',
      badges: ['diamond'],
      dedicated: ['Mihir']
    },
    {
      id: 7,
      title: 'Thank you Sanket',
      user: 'Mihir',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus eos, quisquam error ullam suscipit, perferendis natus sapiente nulla illum modi itaque eius neque adipisci molestias voluptatum esse quia nobis...',
      badges: ['diamond', 'platinum', 'gold', 'bronze'],
      dedicated: ['Sanket']
    },
  ]
  return (
    <div className='home-container'>
      {cards.map(card => (
        <Card key={card.id} card = {card} user = {props.user}/>
      ))}
    </div>
  );
}

export default Home;
