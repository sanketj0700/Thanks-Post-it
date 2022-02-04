import React, {useState} from 'react';
import '../styles/Card.css';
import EditorModal from './EditorModal';
import ReaderModal from './ReaderModal';
import ReadOnlyBadge from './ReadOnlyBadge';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

function Card(props) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(props.card.title);
    const [text, setText] = useState(props.card.text);
    const [badges, setBadges] = useState(props.card.badges);
    const [dedicated, setDedicated] = useState(props.card.dedicated);
    const [activeStar, setActiveStar] = useState(false);
    const text_limit = 200;
    const user = props.card.user;
    const loggedInUser = props.user;

    const handleOnClick = () => {
        setOpen(true);
    }
    const handleStar = (e) =>{
      e.stopPropagation();
      setActiveStar(!activeStar);
    }
  return (
    <>
    {user.given_name === loggedInUser.given_name? 
    <EditorModal 
    open = {open} 
    setOpen = {setOpen}
    loggedInUser = {loggedInUser}
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
        <IconButton onClick={handleStar} className = 'star-icon'>
            {activeStar ? (
              <StarIcon className="active-star" />
            ) : (
              <StarBorderIcon className = 'inactive-star'/>
            )}
        </IconButton>
        <h2 className='card-title'>{title}</h2>
        <Avatar src = {user.picture} alt = {user.given_name}/>
      </div>
      <div className='card-body'>
            <p className='card-text'>
              {text.length > text_limit? <span className='short-text'>{text.substring(0, text_limit)} <span className = 'read-more'>  Read more ...</span> </span> : text}
            </p>
            <p className='dedicated-to'>To: {dedicated.map((person, index)=>{
                return <Chip
                key={index}
                avatar={<Avatar alt={person.given_name} src={person.picture} />}
                label={person.given_name}
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
