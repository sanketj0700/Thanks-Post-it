import React, {useState} from 'react';
import '../styles/Card.css';
import CardModal from './CardModal';
function Card() {
    const [open, setOpen] = useState(false);

    const handleOnClick = () => {
        setOpen(true);
    }
  return (
    <>
    <CardModal open = {open} setOpen = {setOpen}/>
    <div className='card-container' onClick={handleOnClick}>
      
      <div className = 'card-header'>
        <h2 className='card-title'>Thank you</h2>
        <p className='user-name'>Karan</p>
      </div>
      <div className='card-body'>
            <p className='card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus delectus eos, quisquam error ullam suscipit, 
                perferendis natus sapiente nulla illum modi itaque eius neque adipisci molestias voluptatum esse quia nobis... 
            </p>
      </div>
     <div className='card-footer'>
      <ul className='badges'>
          <li>Badge 1</li>
          <li>Badge 2</li>
          <li>Badge 3</li>

      </ul>
     </div>
  </div>
  </>
  );
}

export default Card;
