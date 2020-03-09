import React from "react";
import { connect } from "react-redux";
import SignUpForm from "./SignUpForm";
import { createUser } from "../actions/actions";

class SignUpFormContainer extends React.Component {
  state = {
    email: "",
    password: "",
    name: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createUser(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { createUser })(SignUpFormContainer);