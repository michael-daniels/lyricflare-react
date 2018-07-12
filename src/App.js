import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import SingleCardList from './SingleCardList'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    username: 'Michael',
    email: 'michael.daniels.jr@gmail.com',
    cards: [
      {title:'Good Food', img:'https://www.goodfood.com.au/content/dam/images/h/0/w/1/0/b/image.related.wideLandscape.940x529.h0w10t.png/1518564719291.jpg'},
      {title:'Amazing Dish', img:'https://www.goodfood.com.au/content/dam/images/h/0/w/1/0/b/image.related.wideLandscape.940x529.h0w10t.png/1518564719291.jpg'},
      {title:'Top Notch Feast', img:'https://www.goodfood.com.au/content/dam/images/h/0/w/1/0/b/image.related.wideLandscape.940x529.h0w10t.png/1518564719291.jpg'},
      {title:'Good Food', img:'https://www.goodfood.com.au/content/dam/images/h/0/w/1/0/b/image.related.wideLandscape.940x529.h0w10t.png/1518564719291.jpg'},
      {title:'Amazing Dish', img:'https://www.goodfood.com.au/content/dam/images/h/0/w/1/0/b/image.related.wideLandscape.940x529.h0w10t.png/1518564719291.jpg'},
      {title:'Top Notch Feast', img:'https://www.goodfood.com.au/content/dam/images/h/0/w/1/0/b/image.related.wideLandscape.940x529.h0w10t.png/1518564719291.jpg'},
      {title:'Good Food', img:'https://www.goodfood.com.au/content/dam/images/h/0/w/1/0/b/image.related.wideLandscape.940x529.h0w10t.png/1518564719291.jpg'},
      {title:'Amazing Dish', img:'https://www.goodfood.com.au/content/dam/images/h/0/w/1/0/b/image.related.wideLandscape.940x529.h0w10t.png/1518564719291.jpg'},
      {title:'Top Notch Feast', img:'https://www.goodfood.com.au/content/dam/images/h/0/w/1/0/b/image.related.wideLandscape.940x529.h0w10t.png/1518564719291.jpg'},
    ]
  }

  render() {
    return (
      <div className="App">
        <Navbar userinfo={this.state}/>
        <SingleCardList allcards={this.state.cards} />
      </div>
    );
  }
}

export default App;
