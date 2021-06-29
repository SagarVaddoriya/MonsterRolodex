import react from 'react';
import './Card.style.css'

export const Card = (props) => (
    <div className = 'card-container'>
        <img 
            alt = "moster"
            src= {`https://robohash.org/${props.monster.id}?set=set2`}
        />
        <h2 key = {props.key}>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)