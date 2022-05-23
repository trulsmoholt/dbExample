import React from 'react';
import './Fagkveld.css'
function Fagkveld(props) {
    return <li className="fagkveld-item" onClick={props.onDelete.bind(null, props.id)} >
      <ul>
        <li>{props.tittel}</li>
        <li>{props.tema}</li>
      </ul>
    </li>;
  }
  
  export default Fagkveld;
  