import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            <span>Anime</span>
          </a>
          <span>Kitsu</span>
        </h1>
      </div>
    </header>
  );
}
