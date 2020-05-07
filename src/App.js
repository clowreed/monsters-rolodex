import React, { Component } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      monsters: [],
      searchField: ''
    };
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({
      monsters: users
    }));
  }

  handleChange = evt => {
    evt.preventDefault();    
    this.setState({
      searchField: evt.target.value
    }); 
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">      
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Enter monster name" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />                 
      </div>
    );
  }  
}
