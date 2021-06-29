import react from 'react';
import './Card-list.style.css';
import {Card} from '../Card/Crad.component';

export const Cardlist = (props) =>{
    console.log(props);
return <div className = 'card-list'> {
    props.monsters.map(monster => <Card key = {monster.id} monster ={monster}></Card>
    )
  }</div>

} ;