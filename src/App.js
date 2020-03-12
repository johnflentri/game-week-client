import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListContainer from './components/ListContainer'
// import Lobby from './components/Lobby'

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={ListContainer} />
        {/* <Route path="/Lobby" component={Lobby} /> */}
      </div>
    );
  }
}
export default App