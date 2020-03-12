import React from 'react';
import superagent from 'superagent'
import { connect } from 'react-redux'
import Form from './Form'

const baseUrl = 'http://localhost:4000'
// const baseUrl = 'https://aqueous-island-05561.herokuapp.com'

class Messages extends React.Component {
  createMessage = async (value) => {
    const { channel } = this.props.match.params

    try {
      const response = await superagent
        .post(`${baseUrl}/message`)
        .send({
          text: value,
          channel
        })

      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    console.log("Messages PROPS", this.props);
    const { channel } = this.props.match.params
    console.log('channel test:', channel)

    const messages = this
      .props
      .messages
      .filter(message => message.channel === channel)
      .map(message => <p>{message.text}</p>)

    return <div>
      <h3>Messages</h3>
      <Form onSubmit={this.createMessage} />
      {messages}
    </div>
  }
}

function mapStateToProps(state) {
  console.log("STATE IN MESSAGES", state)
  return {
    messages: state.messages,
  }
}

const connector = connect(mapStateToProps)
const connected = connector(Messages)
export default connected