import React, { Component } from 'react';
import CardList from './CardList/CardListComponent';
import SearchBox from './Search/SearchList';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchInput: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(mylist => this.setState({ monsters: mylist }));
  }
  

  render(){
    const { monsters, searchInput } = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="App">
          <SearchBox 
            placeholder = "search monsters"
            handleChange = { e => this.setState({searchInput: e.target.value}) }
          />
          <CardList monsters = { filterMonsters } />
      </div>
    );
  }
}

export default App;
