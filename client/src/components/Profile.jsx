import React,{useState} from 'react';
import '../styles/Profile.css';
import MentionedMe from './MentionedMe';
import StarredMessages from './StarredMessages';
import Loading from './Loading';
import Avatar from '@mui/material/Avatar';
import { withAuthenticationRequired } from "@auth0/auth0-react";


export default withAuthenticationRequired( function Profile(props) {

  const loggedInUser = JSON.parse(localStorage.getItem('user'));
  const [section,setSection] = useState(true);
   const toggleSection = (e)=>{
     if(e.target.className === 'starredMsgs' && !section)
     {
       setSection(true)
     }
     else if(e.target.className === 'mentionMe' && section)
     {
       setSection(false)
     }
   };

  return (
    <div className='profile-page'>
        <div className='profile-card'>
            <div className='profile-image'>
                  <Avatar
                    alt = {loggedInUser.name}
                    src = {loggedInUser.picture}
                    sx = {{ width:120, height:120}}
                  />
            </div>
            <div className='user-name'>
                <div className='name'>{loggedInUser.name}</div>
            </div>
            {/* <div className='profile-badges'>
              <ul className='diamond'>Diamond badges : </ul>
              <ul className='golden'>Golden badges : </ul>
              <ul className='silver'>Silver badges : </ul>
              <ul className='bronze'>Bronze badges : </ul>
              <ul className='platinum'>Platinum badges : </ul>
            </div> */}
        </div>

          <div className='messages-panel'>
              <p className='starredMsgs' onClick={toggleSection}>Starred Messages</p>
              <p className='mentionMe' onClick={toggleSection}>Mentioned Me</p>
          </div>

          <div className='messages-list'>
            {
              section ? <StarredMessages /> : <MentionedMe />
            }
          </div>
      </div>
  );
}, {
  onRedirecting: () => (<Loading />)
});
