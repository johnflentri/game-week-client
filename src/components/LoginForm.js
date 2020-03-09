import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Log in here</h3>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Email
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
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default LoginForm;