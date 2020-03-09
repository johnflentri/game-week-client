import React from 'react';
import superagent from 'superagent'
import { connect } from 'react-redux'
import Form from './Form'
import Messages from './Messages'
import { Route, Link } from 'react-router-dom'

const baseUrl = 'http://localhost:4000'
// const baseUrl = 'https://aqueous-island-05561.herokuapp.com'

class App extends React.Component {
  stream = new EventSource(`${baseUrl}/stream`)

  componentDidMount() {
    this.stream.onmessage = (event) => {
      // event.data is a JSON string
      // we need a real JavaScript object to use the data
      // To convert, use JSON.parse
      console.log('event.data test:', event.data)
      const parsed = JSON.parse(event.data)
      this.props.dispatch(parsed)
      console.log('parsed test:', parsed)
    }
  }

  createMessage = async (value) => {
    try {
      const response = await superagent
        .post(`${baseUrl}/message`)
        .send({ text: value })

      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  createChannel = async (value) => {
    try {
      console.log('WHAT VALUE IS GIVIN TO CREATECHANNEL', value)
      const response = await superagent
        .post(`${baseUrl}/channel`)
        .send({ channel: value })

      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const channels = this
      .props
      .channels
      .map(channel => <div>
        <Link to={`/messages/${channel}`}>{channel}</Link>
      </div>)
    if (!this.props.channels) {
      return <main>
        <h3>Channels</h3>
        <Form onSubmit={this.createChannel} />
        {this.props.channels}

        <Route path='/messages/:channel' component={Messages} />
      </main>
    } else {
      return <main><h3>hi</h3>
        <Form onSubmit={this.createChannel} />
      </main>
    }
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channelReducer
  }
}


// export default connect(mapStateToProps)(App);

const connector = connect(mapStateToProps)
const connected = connector(App)
export default connected