import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import SingleCardList from './SingleCardList'
import CreateSongBar from './CreateSongBar'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    username: 'Michael',
    email: 'michael.daniels.jr@gmail.com',
    cards: [
      {title:'Overboard', lyrics:''},
      {title:'Your Girl', lyrics:''},
      {title:'You\'re the Best', lyrics:''},
      {title:'I\'m on One', lyrics:''},
      {title:'Ball for Me', lyrics:''},
      {title:'I Don\'t Want This', lyrics:''},
      {title:'Mental Giant', lyrics:''},
      {title:'Amazing', lyrics:''},
      {title:'Top Notch', lyrics:''},
    ]
  }

  render() {
    return (
      <div className="App">
        <Navbar userinfo={this.state}/>
        <div className="container">
        <CreateSongBar />
        <SingleCardList allcards={this.state.cards} />
        </div>
      </div>
    );
  }
}

export default App;
