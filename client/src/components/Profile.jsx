import React,{useState} from 'react';
import '../styles/Profile.css';
import MentionedMe from './MentionedMe';
import StarredMessages from './StarredMessages';


function Profile() {

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
     //console.log(e.target.className)
   };

  return (
    <div className='profile-page'>
        <div className='profile-card'>
            <div className='profile-photo'>
                <span className='dot'></span>
            </div>
            <div className='user-name'>
                <div className='name'>Dhanvi Shah</div>
                <div className='position'>Software Engineer</div>
            </div>
            <div className='profile-badges'>
              <ul className='badge-1'>Diamond badges : </ul>
              <ul className='badge-2'>Golden badges : </ul>
              <ul className='badge-3'>Silver badges : </ul>
              <ul className='badge-4'>Bronze badges : </ul>
              <ul className='badge-5'>Timepass badges : </ul>
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
}

export default Profile;
