import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import './Wall.css'
import Wall from './Wall.jsx'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to The Wall</h2>
        </div>
        <p className="App-intro">
        </p>
        <Wall/>
      </div>
    )
  }
}

export default App
