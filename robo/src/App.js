import React, { Component } from 'react';
import CardList from './CardList/CardListComponent';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : [ ]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(mylist => this.setState({ monsters: mylist }));
  }

  render(){
    return (
      <div className="App">
          <CardList monsters = { this.state.monsters } />
      </div>
    );
  }
}

export default App;
