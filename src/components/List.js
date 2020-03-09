import React from "react";
import LoginFormContainer from "./LoginFormContainer";
import SignUpFormContainer from "./SignUpFormContainer";
import { Link } from "react-router-dom";

class List extends React.Component {
  render() {
    if (this.props.user !== "") {
      return (
        <div>
          <LoginFormContainer />
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