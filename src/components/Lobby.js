import React from 'react';
import { connect } from 'react-redux'
import Form from './Form'
import { getImages } from '../actions/actions'
import Image from './Image'
import CreateFormContainer from './CreateFormContainer'

class Lobby extends React.Component {

  componentDidMount() {
    this.props.getImages()
  }

  render() {
    return <main><h3>Hi</h3>
      <CreateFormContainer />
      <Image />
      <Form onSubmit={this.createChannel} />
    </main>
  }
}

const mapDispatchToProps = { getImages }

export default connect(null, mapDispatchToProps)(Lobby);