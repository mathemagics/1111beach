import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
            <div className="header-title">1111 Beach</div>
            <ul className="header-actions">
              <li>
                  <button className="nav-btn">Login</button>
              </li>
              <li>
                  <button className="nav-btn">About</button>
              </li>
            </ul>
      </header>
    );
  }
}

export default Header;
