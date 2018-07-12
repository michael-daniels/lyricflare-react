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
      {title:'Overboard', lyrics:'porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam'},
      {title:'Your Girl', lyrics:'lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in'},
      {title:'You\'re the Best', lyrics:'vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at'},
      {title:'I\'m on One', lyrics:'eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada'},
      {title:'Ball for Me', lyrics:'quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis'},
      {title:'I Don\'t Want This', lyrics:'sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh'},
      {title:'Mental Giant', lyrics:'habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa'},
      {title:'Amazing', lyrics:'quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in'},
      {title:'Top Notch', lyrics:'sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis'},
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
