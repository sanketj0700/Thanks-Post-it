import React, {useState, useEffect} from 'react';
import '../styles/Card.css';
import EditorModal from './EditorModal';
import ReaderModal from './ReaderModal';
import ReadOnlyBadge from './ReadOnlyBadge';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
function Card(props) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(props.card.title);
    const [text, setText] = useState(props.card.text);
    const [badges, setBadges] = useState(props.card.badges);
    const [dedicated, setDedicated] = useState(props.card.dedicated);
    const text_limit = 200;
    const user = props.card.user;

    const handleOnClick = () => {
        setOpen(true);
    }
  return (
    <>
    {user === props.user? 
    <EditorModal 
    open = {open} 
    setOpen = {setOpen}
    title = {title}
    text = {text}
    badges = {badges}
    dedicated = {dedicated} 
    setTitle = {setTitle}
    setText = {setText}
    setBadges = {setBadges}
    setDedicated = {setDedicated}
    />
    : <ReaderModal open={open} setOpen={setOpen} card = {props.card}/>}
    <div className='card-container' onClick={handleOnClick}>
      
      <div className = 'card-header'>
        <h2 className='card-title'>{title}</h2>
        <Avatar src = 'logo192.png' alt = {user}/>
      </div>
      <div className='card-body'>
            <p className='card-text'>
              {text.length > text_limit? <span className='short-text'>{text.substring(0, text_limit)} <span className = 'read-more'>  Read more ...</span> </span> : text}
            </p>
            <p className='dedicated-to'>To: {dedicated.map((name, index)=>{
                return <Chip
                key={index}
                avatar={<Avatar alt={name} src="logo192.png" />}
                label={name}
                variant="outlined"
              /> 
            })}</p>
      </div>
     <div className='card-footer'>
      <ul className='badges'>
        {badges.map(badge => (
          <ReadOnlyBadge key = {badge} badge = {badge} />
        ))}
      </ul>
     </div>
  </div>
  </>
  );
}

export default Card;
