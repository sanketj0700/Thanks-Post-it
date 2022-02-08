import React, { useState } from 'react';
import Badge from './Badge';

import '../styles/BadgeSelector.css';
function BadgeSelector(props) {
    const badgeList = props.badgeList;
    const [isChecked, setIsChecked] = useState(props.badges.length > 0);
  return (
      <ul className = 'badges'>
        {badgeList.map((badge, index)=>{
            return <Badge key = {index} isChecked = {isChecked} setIsChecked={setIsChecked} badge = {badge} badges = {props.badges} setBadges={props.setBadges}/>
        })}
      </ul>
  );
}

export default BadgeSelector;
