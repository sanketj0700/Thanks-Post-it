import React from 'react';
import '../styles/Badge.css';
function ReadOnlyBadge({badge}) {
  return (
      <li id = {badge}>{badge}</li>
  );
}

export default ReadOnlyBadge;
