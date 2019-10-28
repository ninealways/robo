import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="indmonster">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=80x80`} alt="monster" />
        <h4 className="h4name">{ props.monster.name }</h4>
        <p className="pemail">{ props.monster.email }</p>
    </div>
)

export default Card;