import React from "react";
import LoginFormContainer from "./LoginFormContainer";
import SignUpFormContainer from "./SignUpFormContainer";
import { Link } from "react-router-dom";
import Lobby from './Lobby'

class List extends React.Component {
  render() {
    if (this.props.user !== "") {
      return (
        <div>
          <h3>Welcome to the lobby!</h3>
          <p>Choose a game channel from this list or create your own with the form</p>
          <Lobby />
        </div>
      );
    } else {
      return (
        <div>
          <p>Please log in or sign up to play</p>
          <LoginFormContainer />
          <SignUpFormContainer />
        </div>
      );
    }
  }
}

export default List;