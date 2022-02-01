import React, {useState} from 'react';
import '../styles/Badge.css';
function Badge({badge, badges, setBadges}) {
    const [checked, setChecked] = useState(badges.includes(badge));

  return (
      <>
        <li id = {checked? badge: 'badge'}>
            <input type='checkbox' checked={badges.includes(badge)} id = {badge.substr(1)} name = {badge} value = {badge}
                onChange={(e)=>{
                if(e.target.checked){
                    setBadges([...badges, badge]);
                    setChecked(true);
                }
                else{
                    setBadges(badges.filter(b=>b!==badge));
                    setChecked(false);
                }
                }}
            />
            <label htmlFor={badge.substr(1)} data-id={badge} >{badge}</label>
        </li>
      </>
  );
}

export default Badge;
