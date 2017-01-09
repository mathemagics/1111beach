import React from 'react';

export default ({ authenticated, signOut }) => {
  return (
    <div>
      { authenticated ?
        <header className="header">
          <div className="header-title">1111 Beach</div>
          <button className="logout" onClick={signOut}>
            Sign out
          </button>
        </header> :
      null}
    </div>
  );
};
