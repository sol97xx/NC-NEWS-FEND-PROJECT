import React, { Component } from "react";

class SortForm extends Component {
  state = { value: "created_at" };
  render() {
    return (
      <div className='in-sort-form'>
      <h3 className='sort-title'>Sort by:</h3>
      <form className='form-itself'
        onSubmit={e => {
          this.props.handleSubmit(e, this.state.value);
        }}
      >
        <select className='sort-select option' value={this.state.value} onChange={this.handleChange}>
          <option className='option' value="created_at">created_at</option>
          <option className='option' value="title">title</option>
          <option className='option' value="votes">votes</option>
          <option className='option' value="comment_count">comment_count</option>
        </select>
        <input className='submit-button' type="submit" value="Submit" />
      </form>
      </div>
    );
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
}

export default SortForm;


