import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makePost } from '../actions';

import Messageboard from './message_board';

class Content extends Component {
  render() {
    return (
      <div className="content">
        Message Board
        <Messageboard makePost={this.props.makePost} />
      </div>
    );
  }
}

export default connect(null, { makePost })(Content);
