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
      console.log(post.id);
      return (
        <li className="list-group-item" key={post.id}>
          <span className="float-xs-right">{post.user}</span>
          <strong>{post.msg}</strong>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="message-board">
        <textarea value={this.state.message} onChange={this.onChange} />
        <button className="btn btn-primary" onClick={this.submitPost}>Post</button>
        <h3> Posts </h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

export default MessageBoard;
