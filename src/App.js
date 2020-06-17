import React, { Component } from 'react';
import Header from "./components/Header"
import user from "./user.json"
import './App.css';
import Characters from './components/Characters';

class App extends Component {
  render () {
    return (
      <div className="App">
        
        <Header {...user}/>
        <Characters/>
        
      </div>
    )
  }

  }
  


export default App;
