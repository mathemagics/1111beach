import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makePost, getPosts } from '../actions';

import Messageboard from './message_board';

class Content extends Component {
  componentWillMount() {
    this.props.getPosts();
  }
  render() {
    return (
      <div className="content">
        Message Board
        <Messageboard makePost={this.props.makePost} posts={this.props.messages} />
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  const { messages } = posts;
  return { messages };
};

export default connect(mapStateToProps, { makePost, getPosts })(Content);
