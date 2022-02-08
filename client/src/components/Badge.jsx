import React, {useState} from 'react';
import '../styles/Badge.css';
function Badge({badge, badges, setBadges, isChecked, setIsChecked}) {
    const [checked, setChecked] = useState(badges.includes(badge));
  return (
      <>
        <li id = {checked && isChecked? badge: 'badge'}>
            <input type='checkbox' checked={badges.includes(badge)} 
            disabled = {!badges.includes(badge) && isChecked} // if badge is not in the list and some other box is checked disable the current box
            id = {badge.substr(1)} name = 'badges' value = {badge}
                onChange={(e)=>{
                if(e.target.checked){
                    setBadges([badge]);
                    setIsChecked(true);
                    setChecked(true);
                }
                else{
                    setBadges(badges.filter(b=>b!==badge));
                    setChecked(false);
                    setIsChecked(false);
                }
                }}
            />
            <label htmlFor={badge.substr(1)} data-id={badge} >{badge}</label>
        </li>
      </>
  );
}

export default Badge;
