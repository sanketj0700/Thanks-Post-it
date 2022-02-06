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
import axios from 'axios';
function Card(props) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(props.card.title);
    const [text, setText] = useState(props.card.text);
    const [badges, setBadges] = useState(props.card.badges);
    const [dedicated, setDedicated] = useState(props.card.dedicated);
    const [image, setImage] = useState(props.card.image);
    const [activeStar, setActiveStar] = useState(false);
    const _id = props.card._id;
    const peopleOptions = props.peopleOptions;
    const text_limit = 200;
    const user = props.card.author;
    const loggedInUser = props.user;
    const url = 'https://thanks-post-it-backend.herokuapp.com';

    const handleOnClick = () => {
        setOpen(true);
    }
    const handleStar = (e) =>{
      e.stopPropagation();
      setActiveStar(!activeStar);
      // send to server
      const body = {
        message_id: _id,
        email: loggedInUser.email
      }
      const config = {
        mode: 'no-cors',
        headers: {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      }
      if(!activeStar){
      axios.post(`${url}/user/addToStarred`, body, config).then(res=>{
          console.log(res.data);
      });
      }
      else{
        axios.post(`${url}/user/removeFromStarred`, body, config).then(res=>{
            console.log(res.data);
        });
      }
    }
  return (
    <>
    {user.email === loggedInUser.email? 
    <EditorModal 
    open = {open} 
    setOpen = {setOpen}
    loggedInUser = {loggedInUser}
    image = {image}
    title = {title}
    text = {text}
    badges = {badges}
    dedicated = {dedicated} 
    _id = {_id}
    peopleOptions={peopleOptions}
    setTitle = {setTitle}
    setText = {setText}
    setBadges = {setBadges}
    setDedicated = {setDedicated}
    setImage = {setImage}
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
