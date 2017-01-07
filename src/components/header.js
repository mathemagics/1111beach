import React from 'react';

export default ({ authenticated, signOut }) => {
  return (
    <header className="header">
      <div className="header-title">1111 Beach</div>
      <ul className="header-actions">
        {authenticated ?
          <li>
            <button type="button" className="nav-btn" onClick={signOut}>
              Sign out
            </button>
          </li> :
          null}
        <li>
          <button className="nav-btn">About</button>
        </li>
      </ul>
    </header>
  );
};
