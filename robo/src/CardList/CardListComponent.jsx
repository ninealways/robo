import React from 'react';
import Card from '../Card/CardComponent'
import './CardComponent.css';

const Cardlist = (props) => (
    <div className="allmonsters">
        { props.monsters.map(monster => 
            <Card key = { monster.id } monster = { monster } />
        )}
    </div>
)

export default Cardlist;