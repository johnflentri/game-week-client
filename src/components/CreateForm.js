import React, { Component } from 'react'

export default class EventForm extends Component {

  handleChange = e => {
    this.props.onChange(e);
  }

  render() {
    console.log("CreateForm PROPS", this.props);

    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          Title:
          <input
            type="text"
            onChange={this.handleChange}
            value={this.props.values.title}
            name="title"
            placeholder="title"
          />
          Url:
          <input
            type="text"
            onChange={this.handleChange}
            value={this.props.values.url}
            name="url"
            placeholder="url"
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}