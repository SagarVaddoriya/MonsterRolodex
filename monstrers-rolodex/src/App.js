
import react, { Component} from 'react';
import './App.css';
import {Cardlist} from './Component/Card-list/card-list.component'
import {Searchbox} from './Component/search-box/search-box';

class App extends Component{

  constructor()
  {
    super();
    this.state = {
      monsters : [],
      searchfiled:''  
    };

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  handleChange(e)
  {
    this.setState({searchfiled:e.target.value});
  }

  render()
  {
  const {monsters, searchfiled} = this.state;
  const filterdMonsterd = monsters.filter(monster=>
    monster.name.toLowerCase().includes(searchfiled.toLowerCase())
    )
  return(
  <div className='App'>
    <h1>Monster Rolodex</h1>
    <Searchbox placeholder = 'search monsters'
     handleChange = {this.handleChange}/>
   
    <Cardlist monsters = {filterdMonsterd}>
    </Cardlist>
    
  </div>
  );
  }
}

export default App;
