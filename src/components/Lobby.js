import React from 'react';
import superagent from 'superagent'
import { connect } from 'react-redux'
import Form from './Form'
import Messages from './Messages'
import { Route, Link } from 'react-router-dom'
import { getImages } from '../actions/actions'
import { getChannels } from '../actions/actions'
import Image from './Image'
import CreateFormContainer from './CreateFormContainer'

const baseUrl = 'http://localhost:4000'
// const baseUrl = 'https://aqueous-island-05561.herokuapp.com'

class Lobby extends React.Component {
  stream = new EventSource(`${baseUrl}/stream`)

  componentDidMount() {
    this.props.getImages()

    // this.props.getChannels()

    this.stream.onmessage = (event) => {
      const parsed = JSON.parse(event.data)
      // console.log("this is PARSED", parsed)
      // this.props.dispatch(parsed)
    }
  }

  createMessage = async (value) => {
    try {
      const response = await superagent
        .post(`${baseUrl}/message`)
        .send({ text: value })
    } catch (error) {
      console.error(error)
    }
  }

  createChannel = async (value) => {
    try {
      const response = await superagent
        .post(`${baseUrl}/channel`)
        .send({ channel: value })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    console.log("Lobby PROPS", this.props);
    // const channel = this
    //   .props
    //   .channels
    //   .map(channel => <div>
    //     {channel.name}
    //   </div>)
    // {/* <Link to={`/messages/${channel}`}>{channel}</Link> */ }
    if (!this.props.channels) {
      return <main>
        <h3>Channels</h3>
        <CreateFormContainer />
        <Image />
        <Form onSubmit={this.createChannel} />
        {this.props.channels}

        <Route path='/messages/:channel' component={Messages} />
      </main>
    } else {
      return <main><h3>Hi</h3>
        <Image />
        <Form onSubmit={this.createChannel} />
      </main>
    }
  }
}

// function mapStateToProps(state) {
//   return {
//     channels: state.channels,
//     images: state.images
//   }
// }

const mapDispatchToProps = { getImages }

export default connect(null, mapDispatchToProps)(Lobby);

// const connector = connect(mapStateToProps)
// const connected = connector(App)
// export default connected