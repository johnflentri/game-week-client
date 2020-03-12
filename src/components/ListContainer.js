import React from "react";
import { connect } from "react-redux";
import List from "./List";

class ListContainer extends React.Component {
  render() {
    return <List user={this.props.user} />;
  }
}

function mapStateToProps(state) {
  return {
    user: state.userReducer,
    image: state.imageReducer
  };
}

export default connect(mapStateToProps)(ListContainer);