import React from 'react';

export default (props) => {
  return (
    <div className="message">
      <div className="message-date">Jan 1 2007</div>
      <div className="msg">
        <img
          className="msg-img"
          alt="cannot find"
          src="https://facebook.github.io/react/img/logo_og.png"
        />
        <div className="message-content">
          <div className="message-sender">{props.sender}</div>
          <div className="message-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
