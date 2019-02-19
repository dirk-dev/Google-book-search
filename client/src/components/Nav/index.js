import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>
      <a className="navSearchLink" href="#">
        Search
      </a>
      <span>`|`</span>
      <a className="navSearchLink" href="#">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;
