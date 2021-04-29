import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <nav id="header">
        <Link to="/about">About</Link>
        <Link to="/">Main</Link>
        <div id="search-field">
          <input id="search-field__input" type="text" />
          <button id="search-field__btn">Поиск</button>
        </div>
      </nav>
    );
  }
}

export default Header;
