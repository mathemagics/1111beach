import React, { Component } from 'react';
import _ from 'lodash';

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
        <li className="list-group-item message" key={post.id}>
          <span className="float-xs-right">{post.user}</span>
          <strong>{post.msg}</strong>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="message-board">
        <div className="card">
          <h3 className="card-header">Message Board</h3>
          <div className="card-block">
            <p className="card-text">
              <textarea value={this.state.message} onChange={this.onChange} />
              <button className="btn btn-primary" onClick={this.submitPost}>Post</button>
            </p>
          </div>
        </div>
        <div className="card">
          <h3 className="card-header">Posts</h3>
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
