import React, { Component } from "react";
import * as api from "./api";

class VotesHandler extends Component {
  state = { votes: this.props.votes, inc: 0 };

  render() {
    return (
      <>
        <p>Votes: {this.state.votes + this.state.inc}</p>
        <button
          className="like-button"
          disabled={this.state.inc > 0 ? true : false}
          onClick={() => {
            this.clickHandler(1);
          }}
        >
          Like
        </button>
        <button
          disabled={this.state.inc < 0 ? true : false}
          onClick={() => {
            this.clickHandler(-1);
          }}
          className="dislike-button"
        >
          Dislike
        </button>
      </>
    );
  }
  clickHandler = value => {
    this.setState(({ inc }) => {
      return { inc: inc + value };
    });
    api
      .patchArticleVotes(value, this.props.article_id, this.props.url)
      .catch(err => {
        this.setState(({ inc }) => {
          return { inc: inc - value };
        });
      });
  };
}

export default VotesHandler;
