import React from "react";

class SignUpForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Sign Up Now!</h3>
        <form onSubmit={this.props.onSubmit}>
          <label>
            E-mail
            <input
              type="text"
              name="email"
              placeholder="email"
              value={this.props.values.email}
              onChange={this.props.onChange}
            />
          </label>
          <label>
            Password
            <input
              type="text"
              name="password"
              placeholder="password"
              value={this.props.values.password}
              onChange={this.props.onChange}
            />
          </label>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.props.values.name}
              onChange={this.props.onChange}
            />
          </label>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default SignUpForm;