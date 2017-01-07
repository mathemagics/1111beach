import React from 'react';

export default ({ authenticated, signOut }) => {
  return (
    <header className="header">
      <ul className="header-actions">
        {authenticated ?
          <li>
            <button type="button" className="nav-btn" onClick={signOut}>
              Sign out
            </button>
          </li> :
          null}
      </ul>
    </header>
  );
};
