import React, { Component } from "react";

class SortForm extends Component {
  state = { value: "created_at" };
  render() {
    return (
      <form
        onSubmit={e => {
          this.props.handleSubmit(e, this.state.value);
        }}
      >
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="created_at">created_at</option>
          <option value="title">title</option>
          <option value="votes">votes</option>
          <option value="comment_count">comment_count</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
}

export default SortForm;


