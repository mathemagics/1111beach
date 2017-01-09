import React, { Component } from 'react';
import _ from 'lodash';
import Message from './message';

class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.onChange = this.onChange.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }
  onChange(e) {
    this.setState({ message: e.target.value });
  }
  submitPost() {
    this.props.makePost(this.state.message);
    this.setState({ message: '' });
  }
  renderPosts() {
    return _.map(this.props.posts, (post) => {
      return (
        <Message sender={post.user} key={post.id}>
          {post.msg}
        </Message>
      );
    });
  }
  render() {
    return (
      <div className="message-board">
        <div>
          <div className="card-block">
            <div className="msg-send">
              <textarea value={this.state.message} onChange={this.onChange} />
              <button className="btn btn-primary" onClick={this.submitPost}>Post</button>
            </div>
          </div>
        </div>
        <div>
          <div className="card-block">
            <ul className="list-group message-list">
              {this.renderPosts()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageBoard;
