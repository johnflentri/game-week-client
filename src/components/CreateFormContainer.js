import React from 'react'
import { connect } from 'react-redux'
import { createImage } from '../actions/actions'
import CreateForm from './CreateForm'

class CreateFormContainer extends React.Component {
  state = {
    title: '',
    url: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createImage(this.state)
    this.setState({
      title: '',
      url: '',
    })
  }

  render() {
    console.log("CreateFormContainer PROPS", this.props);
    return (<CreateForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, { createImage })(CreateFormContainer)