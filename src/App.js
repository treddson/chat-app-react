import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA_7VZru5wYLmL3k5lC-FVzD2MmVaaP-B8",
  authDomain: "bloc-chat-react-3a40c.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-3a40c.firebaseio.com",
  projectId: "bloc-chat-react-3a40c",
  storageBucket: "bloc-chat-react-3a40c.appspot.com",
  messagingSenderId: "518580362062"
};
firebase.initializeApp(config);


class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        activeRoom: "",
        activeMessage: "",
        currentUser: ""
      }
      this.setActiveRoom = this.setActiveRoom.bind(this);
      this.setMessage = this.setMessage.bind(this);
    }

    setActiveRoom(room) {
      // console.log(room)
      this.setState({ activeRoom: room })
    }

    setMessage(message) {
      this.setState({ activeMessage: message })
    }

    setUser(user) {
      this.setState({currentUser: user});
    }

  render() {
    return (
      <section>
      <div className="App">
        <h1>Bloc Chat</h1>
        <nav className="nav-container">
        <h1>Available Rooms</h1> 
          <RoomList firebase= { firebase } createRoom={() => this.createRoom() } setActiveRoom={this.setActiveRoom } /> 
        </nav> 
        <main>
          <h2>Current User: {this.state.currentUser ? this.state.currentUser.displayName: 'Guest'}</h2>
          <User firebase = { firebase } setUser={this.setUser.bind(this)} currentUser={this.state.currentUser } />
        </main>
          <MessageList firebase = { firebase } activeRoom={this.state.activeRoom} messages={this.state.messages } /> 
      </div>
      </section>
    );
  }
}

export default App;
