import React,{useState} from 'react';
import '../styles/Profile.css';
import MentionedMe from './MentionedMe';
import StarredMessages from './StarredMessages';
import Loading from './Loading';
import { useAuth0,withAuthenticationRequired } from "@auth0/auth0-react";


export default withAuthenticationRequired( function Profile() {

  const [section,setSection] = useState(true);
   const toggleSection = (e)=>{
     if(e.target.className === 'messages-1' && !section)
     {
       setSection(true)
     }
     else if(e.target.className === 'messages-2' && section)
     {
       setSection(false)
     }
   };

  return (
    <div className='profile-page'>
        <div className='profile-card'>
            <div className='profile-photo'>
                <span className='dot'></span>
            </div>
            <div className='user-name'>
                <div className='name'>Dhanvi Shah</div>
            </div>
            <div className='profile-badges'>
              <ul className='diamond'>Diamond badges : </ul>
              <ul className='golden'>Golden badges : </ul>
              <ul className='silver'>Silver badges : </ul>
              <ul className='bronze'>Bronze badges : </ul>
              <ul className='platinum'>Platinum badges : </ul>
            </div>
        </div>

        <div className='messages-panel'>
            <p className='messages-1' onClick={toggleSection}>Starred Messages</p>
            <p className='messages-2' onClick={toggleSection}>Mentioned Me</p>
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
